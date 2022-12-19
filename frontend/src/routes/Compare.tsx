import { ChangeEvent, useEffect, useState } from 'react'
import CompareTable from '../components/CompareTable'
import DefaultLayout from '../layouts/DefaultLayout'
import { store } from '../store/store'
import axios from 'axios'
import MyButton from '../components/buttons/MyButton'
import { useNavigate } from 'react-router-dom'

function Compare() {
  const compareList = store.getState().comparatorState.toCompare

  const [firstToCompare, setFirstToCompare] = useState(1)
  const [secondToCompare, setSecondToCompare] = useState(2)

  const [firstJobToCompare, setFirstJobToCompare] = useState()
  const [secondJobToCompare, setSecondJobToCompare] = useState()

  const navigation = useNavigate()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>, set: React.Dispatch<React.SetStateAction<any>>) => {
    set(event.target.value)
  }

  useEffect(() => {
    getJob(firstToCompare).then(job => setFirstJobToCompare(job))
    getJob(secondToCompare).then(job => setSecondJobToCompare(job))
  }, [firstToCompare, secondToCompare])

  const getJob = async (id: number) => {
    const response = await axios.get(`http://127.0.0.1:5000/jobs/${id}`)

    return response.data
  }

  const showOfferDetails = (id: number | undefined) => {
    console.log(id)
    navigation(`/offer-details?jobId=${id}`)
  }

  return (
    <DefaultLayout>
      <h1 className='text-4xl font-extrabold text-center'>PORÓWNYWARKA</h1>
      <div className='grid grid-cols-7 mt-8'>
        <div className='col-span-3 text-center'>
          <select value={firstToCompare} onChange={event => handleChange(event, setFirstToCompare)}>
            {compareList.map(offer => (
              <option value={offer.id}>{offer.title}</option>
            ))}
          </select>

          <CompareTable job={firstJobToCompare}></CompareTable>
          <MyButton className='mt-4 mb-20' onClick={() => showOfferDetails(firstToCompare)}>
            Zobacz szczegóły!
          </MyButton>
        </div>
        <div className='col-span-1 text-center'></div>
        <div className='col-span-3 text-center'>
          <select value={secondToCompare} onChange={event => handleChange(event, setSecondToCompare)}>
            {compareList.map(offer => (
              <option value={offer.id}>{offer.title}</option>
            ))}
          </select>

          <CompareTable job={secondJobToCompare}></CompareTable>

          <MyButton className='mt-4 mb-20' onClick={() => showOfferDetails(secondToCompare)}>
            Zobacz szczegóły!
          </MyButton>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Compare
