import { useState } from 'react'
import type { Filters as FiltersType } from '../types/types'
import MyButton from './buttons/MyButton'

type Props = {
  handleFilters: (filters: FiltersType) => void
}

const Filters = (props: Props) => {
  const educations = ['Podstawówka', 'Liceum', 'Wyższe']
  const skills = ['Konstruowanie maszyn', 'Spawanie']

  const [education, setEducation] = useState<string>('')
  const [skill, setSkill] = useState<string>('')

  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(100000)

  const clearFilters = () => {
    setEducation('')
    setSkill('')
    setMin(0)
    setMax(100000)

    props.handleFilters({
      education: '',
      skill: '',
      min: 0,
      max: 100000,
    })
  }

  return (
    <aside className='px-8 py-4 bg-gray-200 rounded-3xl'>
      <form>
        <h2 className='mb-8 text-2xl font-bold tracking-widest text-center text-primary'>Filtry</h2>
        <fieldset>
          <legend className='mb-2'>Wykształcenie:</legend>

          {educations.map(education => (
            <div key={education}>
              <input
                type='radio'
                id={education}
                name='education'
                value={education}
                onChange={e => setEducation(e.target.value)}
              />
              <label className='ml-2' htmlFor={education}>
                {education}
              </label>
            </div>
          ))}
        </fieldset>

        <fieldset className='mt-4'>
          <legend className='mb-2'>Umiejętności:</legend>

          {skills.map(skill => (
            <div key={skill}>
              <input type='radio' id={skill} name='skill' value={skill} onChange={e => setSkill(e.target.value)} />
              <label className='ml-2' htmlFor={skill}>
                {skill}
              </label>
            </div>
          ))}
        </fieldset>

        <legend className='mt-4 mb-2'>Wynagrodzenie:</legend>

        <div>
          <label className='ml-2' htmlFor='min'>
            Od
          </label>
          <input
            className='ml-2'
            type='number'
            id='min'
            name='salary'
            value={min}
            onChange={event => setMin(parseInt(event.target.value) || 0)}
          />
        </div>

        <div>
          <label className='ml-2' htmlFor='max'>
            Do
          </label>
          <input
            className='ml-2'
            type='number'
            id='max'
            name='salary'
            value={max}
            onChange={event => setMax(parseInt(event.target.value) || 0)}
          />
        </div>

        <div className='flex flex-col '>
          <MyButton className='mt-4' onClick={() => props.handleFilters({ education, skill, min, max })}>
            Zastosuj
          </MyButton>
          <MyButton className='mt-4' onClick={() => clearFilters()}>
            Wyczyść
          </MyButton>
        </div>
      </form>
    </aside>
  )
}

export default Filters
