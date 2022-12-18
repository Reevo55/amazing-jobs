import type { Job } from '../../types/types'
import JobItem from './items/JobItem'

type JobListProps = {
  jobs: Job[]
}

function JobList(props: JobListProps) {
  const { jobs } = props

  return (
    <div>
      {jobs.map(job => (
        <JobItem key={job.job_id} job={job} />
      ))}
    </div>
  )
}

export default JobList
