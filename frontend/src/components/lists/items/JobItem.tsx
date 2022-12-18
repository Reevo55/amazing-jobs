import type { Job } from '../../../types/types'
import { Icon } from '@iconify/react'
import MyButton from '../../buttons/MyButton'
import { useNavigate } from 'react-router-dom'

type JobListProps = {
  job: Job
}

function JobItem({ job }: JobListProps) {
  const navigate = useNavigate()

  const checkOffer = () => {
    navigate(`/jobs?jobId=${job.job_id}`)
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
        <div className='col-span-1 justify-self-end'>
          <Icon icon='mdi:heart' className='w-6 h-6 mb-1 text-gray-400' aria-hidden='true' />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <div>
          <p className='text-gray-500'>
            <span className='text-xl text-primary'>{job.salary} zł</span>
            <span>/month</span>
          </p>
        </div>
        <div className='text-center'>
          <MyButton onClick={checkOffer}>Zobacz oferte</MyButton>
        </div>
        <div className='text-right'>
          <p>
            Porównaj <Icon icon='mdi:compare' className='inline-block w-6 h-6 mb-1 text-gray-400' aria-hidden='true' />
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobItem
