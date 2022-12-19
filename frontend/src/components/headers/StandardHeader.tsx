import ButtonLink from '../links/ButtonLink'
import StandardLink from '../links/StandardLink'
import Logo from '../../assets/logo.svg'

export default function StandardHeader() {
  const user_id = localStorage.getItem('user_id')

  return (
    <nav className='w-11/12 mx-auto my-6'>
      <ul className='grid grid-cols-6 justify-items-center'>
        <li className='col-span-1 justify-self-start'>
          <img src={Logo} alt='company logo' />
        </li>

        <ul className='flex col-span-4 gap-10'>
          <li>
            <StandardLink to={'/'}>Strona główna</StandardLink>
          </li>
          <li>
            <StandardLink to={'/jobs'}>Szukaj</StandardLink>
          </li>
          <li>
            <StandardLink to={'/compare'}>Porównuj</StandardLink>
          </li>

          {user_id && (
            <li>
              <StandardLink to={'/cv-generator'}>CV Generator</StandardLink>
            </li>
          )}
          {user_id && (
            <li>
              <StandardLink to={'/new-offer'}>Stwórz ofertę</StandardLink>
            </li>
          )}

          {user_id && (
            <li>
              <StandardLink to={'/favourite-offers'}>Ulubione oferty</StandardLink>
            </li>
          )}
        </ul>

        <ul className='flex space-x-8'>
          <li>
            <StandardLink to={'/login'}>Zaloguj się</StandardLink>
          </li>
          <li>
            <ButtonLink to={'/register'}>Zarejestruj się</ButtonLink>
          </li>
        </ul>
      </ul>
    </nav>
  )
}
