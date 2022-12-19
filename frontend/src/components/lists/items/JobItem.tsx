import { Job, MessageType } from '../../../types/types'
import { Icon } from '@iconify/react'
import MyButton from '../../buttons/MyButton'
import { useNavigate } from 'react-router-dom'
import { onCompareOfferAdded } from '../../../store/actions/comparator'
import { onShowStatusMessage } from '../../../store/actions/statusMessage'
import { useAppDispatch } from '../../../hooks'
import axios from 'axios'
import { store } from '../../../store/store'

type JobListProps = {
  job: Job
}

function JobItem({ job }: JobListProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const checkOffer = () => {
    navigate(`/offer-details?jobId=${job.job_id}`)
  }

  const jobToOffer = () => {
    const offer = {
      id: job.job_id.toString(),
      title: job.position_name,
      company: job.company_name,
      location: job.location,
      salary: job.salary,
      role: job.position_name,
      yourTasks: job.things_to_do,
      expectations: job.required_skills,
      benefits: '',
      legal: '',
      aboutCompany: job.company_name,
    }

    return offer
  }

  const addToCompare = () => {
    dispatch(onCompareOfferAdded(jobToOffer()))
    dispatch(
      onShowStatusMessage(
        'Dodano do porównywarki',
        'Oferta dodana do porównywaki, wybierz ją na ekranie porównywania aby porównać z inną ofertą',
        MessageType.info
      )
    )
  }

  const addToFavourites = async () => {
    const userId = localStorage.getItem('user_id')

    if (!userId) {
      dispatch(
        onShowStatusMessage(
          'Nie jesteś zalogowany',
          'Musisz się zalogować aby dodać ofertę do ulubionych',
          MessageType.info
        )
      )

      return
    }

    try {
      await axios.post(`http://127.0.0.1:5000/favourite_jobs/${userId}`, {
        offer_id: job.job_id,
      })
      dispatch(
        onShowStatusMessage(
          'Dodano oferte do ulubionych',
          'Możesz teraz zobaczyć oferte w zakładce ulubione oferty',
          MessageType.success
        )
      )
    } catch (error) {
      dispatch(
        onShowStatusMessage('Nie udało się dodać oferty do ulubionych', 'Spróbuj ponownie później', MessageType.failure)
      )
    }
  }

  return (
    <div className='p-8 shadow-lg w-100'>
      <div className='grid grid-cols-6 gap-2'>
        <div className='col-span-5'>
          <h2 className='text-gray-500 '>
            <span className='text-3xl font-normal '> {job.position_name} </span>{' '}
            <span className='text-base ml- font-extralight'>{job.company_name}</span>
          </h2>

          <p className='my-4 text-secondary'>{job.short_description}</p>
          <p className=' text-secondary'> {job.required_education}</p>
          <p className=' text-secondary'> {job.required_experience}</p>
          <p className=' text-secondary'> {job.required_skills}</p>

          <p className='my-4'>
            <Icon icon='mdi:map-marker' className='inline-block w-6 h-6 mb-1 text-gray-400' aria-hidden='true' />
            {job.location}
          </p>
        </div>
        <div className='col-span-1 justify-self-end text-secondary'>
          <div className='flex justify-center mb-4'>
            <Icon
              icon='mdi:heart'
              className='w-6 h-6 mb-1 text-gray-400 cursor-pointer hover:text-red-500'
              onClick={addToFavourites}
              aria-hidden='true'
            />
          </div>
          <p className='mb-2 text-center text-secondary'>
            Oferta z portalu <span className='font-bold'>{job.offer_type}</span>
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <div>
          <p className='text-gray-500'>
            <span className='text-xl text-primary'>{job.salary} zł</span>
            <span>/miesięcznie</span>
          </p>
        </div>
        <div className='text-center'>
          <MyButton onClick={checkOffer}>Zobacz oferte</MyButton>
        </div>
        <div className='text-right'>
          <p className='cursor-pointer hover:text-primary' onClick={addToCompare}>
            Porównaj <Icon icon='mdi:compare' className='inline-block w-6 h-6 mb-1 text-gray-400' aria-hidden='true' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobItem
