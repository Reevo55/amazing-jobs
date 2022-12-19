import React from 'react'
import { useNavigate } from 'react-router-dom'
import SearchJobInput from './SearchJobInput'

type Props = {}

const HeroSearch = (props: Props) => {
  const navigate = useNavigate()

  const searchAction = (searchPhrase: string, city: string) => {
    navigate(`/jobs?search=${searchPhrase}&city=${city}`)
  }

  return (
    <section className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen mx-auto -z-10'>
      <div>
        <h1 className='font-bold text-center text-8xl '>
          Get The <span className='text-primary'>Right Job</span> <br></br> You Deserve
        </h1>
        <SearchJobInput className='mt-8' searchAction={searchAction}></SearchJobInput>
      </div>
    </section>
  )
}

export default HeroSearch
