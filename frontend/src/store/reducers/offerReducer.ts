import { OfferState } from '../../types/types'
import { AnyAction } from '@reduxjs/toolkit'
import { ON_OFFER_CHANGED } from '../actions/offer'

export const offerInitialState: OfferState = {
  aboutCompany: '',
  benefits: '',
  company: '',
  expectations: '',
  location: '',
  role: '',
  salary: '',
  title: '',
  yourTasks: '',
}

const offerReducer = (state = offerInitialState, action: AnyAction): OfferState => {
  const { offerState } = action.payload || {}

  switch (action.type) {
    case ON_OFFER_CHANGED:
      return {
        ...state,
        aboutCompany: offerState.aboutCompany,
        benefits: offerState.benefits,
        company: offerState.company,
        expectations: offerState.expectations,
        location: offerState.location,
        role: offerState.role,
        salary: offerState.salary,
        title: offerState.title,
        yourTasks: offerState.yourTasks,
      }
    default:
      return state
  }
}

export default offerReducer
