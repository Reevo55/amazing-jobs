import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Filters from '../components/Filters'
import SearchJobInput from '../components/SearchJobInput'
import DefaultLayout from '../layouts/DefaultLayout'
import cities from '../assets/cities.json'
import axios from 'axios'
import JobList from '../components/lists/JobList'
import { Filters as FiltersType, Job } from '../types/types'
import { set } from 'immer/dist/internal'

type FiltersWithSearch = FiltersType & {
  search: string
  city: string
}

function Jobs() {
  const [searchParams] = useSearchParams()
  const searchPhrase = searchParams.get('search') || ''
  const cityName = searchParams.get('city')

  const [filters, setFilters] = useState<Partial<FiltersWithSearch>>({})

  const [search, setSearch] = useState<string>(searchPhrase)
  const [city, setCity] = useState<string>(cityName || 'Warszawa')

  const [jobs, setJobs] = useState<Job[]>([])

  const searchAction = async (searchPhrase: string, city: string) => {
    setSearch(searchPhrase)
    setCity(city)

    const jobsResponse = await getAndSetJobs()

    const filteredJobs = filtersPipeline(jobsResponse, {
      search,
      city,
      ...filters,
    })

    setJobs(filteredJobs)
  }

  const getAndSetJobs = async () => {
    const response = await axios.get(`http://127.0.0.1:5000/jobs`)

    const jobsResponse = response.data.job_offers
    return jobsResponse
  }

  const handleFilters = async (filters: FiltersType) => {
    const filteredJobs = filtersPipeline(jobs, { ...filters, search, city })

    setFilters(filters)
    setJobs(filteredJobs)
  }

  const filtersPipeline = (jobs: Job[], filters: Partial<FiltersWithSearch>) => {
    let filteredJobs

    filteredJobs = jobs.filter(job => {
      if (!filters.search) {
        return true
      }

      if (job.position_name.toLowerCase().includes(filters.search.toLowerCase())) {
        return true
      }

      return false
    })

    filteredJobs = filteredJobs.filter(job => {
      if (!filters.city) {
        return true
      }

      if (job.location.toLowerCase().includes(filters.city.toLowerCase())) {
        return true
      }

      return false
    })

    filteredJobs = filteredJobs.filter(job => {
      if (!filters.min) {
        return true
      }

      if (parseInt(job.salary) >= filters.min) {
        return true
      }

      return false
    })

    filteredJobs = filteredJobs.filter(job => {
      if (!filters.max) {
        return true
      }

      if (parseInt(job.salary) <= filters.max) {
        return true
      }

      return false
    })

    filteredJobs = filteredJobs.filter(job => {
      if (!filters.skill) {
        return true
      }

      if (job.required_skills.toLowerCase().includes(filters.skill.toLowerCase())) {
        return true
      }

      return false
    })

    filteredJobs = filteredJobs.filter(job => {
      if (!filters.education) {
        return true
      }
      console.log(job.required_education)

      if (job.required_education.toLowerCase().includes(filters.education.toLowerCase())) {
        return true
      }

      return false
    })

    return filteredJobs
  }

  const handleReset = () => {
    setFilters({})
    getAndSetJobs().then(jobsResponse => {
      setJobs(jobsResponse)
    })
  }

  useEffect(() => {
    getAndSetJobs().then(jobsResponse => {
      setJobs(filtersPipeline(jobsResponse, { search, city }))
    })
  }, [])

  return (
    <DefaultLayout className='grid grid-cols-6 gap-4'>
      <aside className='col-span-2'>
        <Filters handleFilters={handleFilters} handleReset={handleReset}></Filters>
      </aside>
      <section className='col-span-4'>
        <SearchJobInput searchAction={searchAction} startCity={city} startSearchPhrase={searchPhrase}></SearchJobInput>

        <section>
          <JobList jobs={jobs}></JobList>
        </section>
      </section>
    </DefaultLayout>
  )
}

export default Jobs
