import MyButton from './buttons/MyButton'
import SearchIcon from '@material-ui/icons/Search'
import MyInput from './inputs/MyInput'
import MyListbox from './lists/MyListbox'
import cities from '../assets/cities.json'
import { useState } from 'react'
import { City } from '../types/types'

type Props = {
  className?: string
  searchAction: (searchPhrase: string, city: string) => void
  startCity?: City
  startSearchPhrase?: string
}

const citiesArray = cities.pl as City[]

const SearchJobInput = ({ className, searchAction, startCity, startSearchPhrase }: Props) => {
  const [city, setCity] = useState(startCity || citiesArray[0])
  const [searchPhrase, setSearchPhrase] = useState(startSearchPhrase || '')

  const handleSearch = () => {
    searchAction(searchPhrase, city.enum)
  }

  return (
    <div className={`grid grid-cols-4 gap-3 ${className}`}>
      <MyInput
        placeholder='Znajdź wymarzoną prace!'
        className='col-span-2'
        value={searchPhrase}
        onChange={event => setSearchPhrase(event.target.value)}></MyInput>
      <MyListbox<City> objects={citiesArray} property={'name'} setSelected={setCity} selected={city}></MyListbox>
      <MyButton icon={<SearchIcon />} onClick={() => handleSearch()}>
        Szukaj
      </MyButton>
    </div>
  )
}

export default SearchJobInput
