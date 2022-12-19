import React from 'react'
import { Job } from '../types/types'
import CompareItem from './CompareItem'

type Props = {
  job?: Job
}

const CompareTable = ({ job }: Props) => {
  return (
    <div className='p-8 mt-8 shadow-lg'>
      <h1 className='text-3xl text-gray-500 mb-7'>{job?.position_name || 'Brak'}</h1>

      <CompareItem title='Wynagrodzenie' text={`${job?.salary} zł/miesięcznie` || 'Brak'}></CompareItem>
      <CompareItem title='Miejsce pracy' text={job?.location || 'Brak'}></CompareItem>
      <CompareItem title='Firma' text={job?.company_name || 'Brak'}></CompareItem>
      <CompareItem title='Źródło oferty' text={job?.offer_type || 'Brak'}></CompareItem>
      <CompareItem title='Zakres obowiązków' text={job?.things_to_do || 'Brak'}></CompareItem>
      <CompareItem title='Wymagania' text={job?.required_skills || 'Brak'}></CompareItem>
      <CompareItem title='Oferujemy' text={job?.benefits || 'Brak'}></CompareItem>
      <CompareItem title='Rodzaj pracy' text={job?.job_type || 'Brak'}></CompareItem>
      <CompareItem title='Krótki opis' text={job?.short_description || 'Brak'}></CompareItem>
    </div>
  )
}

export default CompareTable
