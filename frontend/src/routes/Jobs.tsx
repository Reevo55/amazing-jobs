import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Filters from '../components/Filters'
import SearchJobInput from '../components/SearchJobInput'
import DefaultLayout from '../layouts/DefaultLayout'
import cities from '../assets/cities.json'
import axios from 'axios'
import JobList from '../components/lists/JobList'
import { Filters as FiltersType, Job } from '../types/types'

function Jobs() {
  const [searchParams] = useSearchParams()
  const searchPhrase = searchParams.get('search') || ''
  const cityEnum = searchParams.get('city')

  const [jobs, setJobs] = useState<Job[]>([])

  const cityObj = cities.pl.find(city => city.enum === cityEnum)

  const searchAction = async (searchPhrase: string, city: string) => {
    const response = await axios.get(`http://127.0.0.1:5000/jobs`)

    const cityObj = cities.pl.find(cityObj => cityObj.enum === city)

    const cityName = cityObj ? cityObj.name : ''

    const jobs = response.data.job_offers.filter((job: Job) => {
      if (!job.position_name.toLowerCase().includes(searchPhrase.toLowerCase())) {
        return false
      }

      if (
        job.short_description.toLowerCase().includes(searchPhrase.toLowerCase()) &&
        job.location.toLowerCase().includes(cityName.toLowerCase())
      ) {
        return true
      }

      return true
    })

    setJobs(jobs)
  }

  const handleFilters = async (filters: FiltersType) => {
    const response = await axios.get(`http://127.0.0.1:5000/jobs`)

    const filteredJobs = filterJobs(response.data.job_offers, filters)

    setJobs(filteredJobs)
  }

  const filterJobs = (jobs: Job[], filters: FiltersType) => {
    console.log(filters)
    return jobs.filter(job => {
      if (
        filters.education &&
        job.required_education.toLowerCase().includes(filters.education.toLowerCase()) &&
        filters.min &&
        parseInt(job.salary.toString()) < filters.min &&
        filters.max &&
        parseInt(job.salary.toString()) > filters.max &&
        filters.skill &&
        job.required_skills.includes(filters.skill)
      ) {
        return true
      }

      return false
    })
  }

  useEffect(() => {
    searchAction(searchPhrase, cityEnum || '')
  }, [searchPhrase, cityEnum])

  return (
    <DefaultLayout className='grid grid-cols-6 gap-4'>
      <aside className='col-span-2'>
        <Filters handleFilters={handleFilters}></Filters>
      </aside>
      <section className='col-span-4'>
        <SearchJobInput
          searchAction={searchAction}
          startCity={cityObj}
          startSearchPhrase={searchPhrase}></SearchJobInput>

        <section>
          <JobList jobs={jobs}></JobList>
        </section>
      </section>
    </DefaultLayout>
  )
}

export default Jobs
