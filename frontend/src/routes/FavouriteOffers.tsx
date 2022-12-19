import { useState, useEffect } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import axios from 'axios'
import JobList from '../components/lists/JobList'
import { Job } from '../types/types'

function FavoruiteJobs() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    const fetchJobs = async () => {
      const userId = localStorage.getItem('user_id')
      const response = await axios.get(`http://127.0.0.1:5000/favourite_jobs/${userId}`)
      console.log(response.data)
      setJobs(response.data.favourite_offers)
    }

    fetchJobs()
  }, [])

  return (
    <DefaultLayout className=''>
      <section>
        {jobs.length === 0 ? (
          <p className='mt-20 text-3xl font-bold text-center'>You have no favourite jobs</p>
        ) : (
          <JobList jobs={jobs}></JobList>
        )}
      </section>
    </DefaultLayout>
  )
}

export default FavoruiteJobs
