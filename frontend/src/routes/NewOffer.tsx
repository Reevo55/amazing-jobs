import DefaultLayout from '../layouts/DefaultLayout'
import React, { useState } from 'react'
import { AppState, OfferState, ProfileState } from '../types/types'
import { connect } from 'react-redux'
import OfferFormTextArea from '../components/inputs/OfferRichEditor'
import { useAppDispatch } from '../hooks'
import { createNewOfferAndRedirect } from '../store/thunks/offer'
import OfferFormInput from '../components/inputs/OfferFormInput'
import { useNavigate } from 'react-router-dom'

interface NewOfferState {
  profile: ProfileState
}

const NewOffer = (newOfferState: NewOfferState) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [offer, setOffer] = useState<OfferState>({
    title: '',
    yourTasks: '',
    salary: '',
    role: '',
    location: '',
    expectations: '',
    company: '',
    benefits: '',
    aboutCompany: '',
    legal: '',
  })

  const submit = () => {
    if (!validate()) return

    const current_user_id = JSON.parse(localStorage.getItem('user_id')!)
    newOfferState.profile.userId = current_user_id
    dispatch(createNewOfferAndRedirect(current_user_id, offer))
    navigate('/')
  }

  const validate = (): boolean => {
    return true
  }

  return (
    <DefaultLayout>
      <div className={'max-w-5xl'}>
      <h1 className='text-4xl font-extrabold text-center'>Stwórz nową ofertę</h1>
        <div className={'grid grid-cols-2 gap-4 mt-7'}>
          <OfferFormInput
            props={{
              value: offer.title,
              label: 'Nazwa stanowiska',
              setValue: newValue => setOffer({ ...offer, title: newValue }),
            }}
          />
          <OfferFormInput
            props={{
              value: offer.location,
              label: 'Lokalizacja',
              setValue: newValue => setOffer({ ...offer, location: newValue }),
            }}
          />
          <OfferFormInput
            props={{
              value: offer.company,
              label: 'Nazwa firmy',
              setValue: newValue => setOffer({ ...offer, company: newValue }),
            }}
          />
          <OfferFormInput
            props={{
              value: offer.salary,
              label: 'Stawka',
              setValue: newValue => setOffer({ ...offer, salary: newValue }),
            }}
          />
        </div>
        <div className={'grid grid-cols-1 gap-4'}>
          <div />
          <OfferFormTextArea
            props={{
              value: offer.aboutCompany,
              label: 'O firmie',
              setValue: newValue => setOffer({ ...offer, aboutCompany: newValue }),
            }}
          />
          <OfferFormTextArea
            props={{
              value: offer.role,
              label: 'Twoja rola',
              setValue: newValue => setOffer({ ...offer, role: newValue }),
            }}
          />
          <OfferFormTextArea
            props={{
              value: offer.yourTasks,
              label: 'Twoje zadania',
              setValue: newValue => setOffer({ ...offer, yourTasks: newValue }),
            }}
          />
          <OfferFormTextArea
            props={{
              value: offer.expectations,
              label: 'Oczekiwania',
              setValue: newValue => setOffer({ ...offer, expectations: newValue }),
            }}
          />
          <OfferFormTextArea
            props={{
              value: offer.benefits,
              label: 'Benefity',
              setValue: newValue => setOffer({ ...offer, benefits: newValue }),
            }}
          />
          <OfferFormTextArea
            props={{
              value: offer.legal,
              label: 'Obowiązkowe zgody kandydata',
              setValue: newValue => setOffer({ ...offer, legal: newValue }),
            }}
          />
        </div>
        <div className={'mt-4 text-right'}>
          <button
            onClick={submit}
            className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'}>
            Zapisz
          </button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default connect(
  (state: AppState): NewOfferState => ({
    profile: state.profileState,
  })
)(NewOffer)
