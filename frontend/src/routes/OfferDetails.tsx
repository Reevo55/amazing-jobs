import DefaultLayout from '../layouts/DefaultLayout'
import React from 'react'
import { OfferState } from '../types/types'
import { offerInitialState } from '../store/reducers/offerReducer'

export interface OfferDetailsProps {
  offer: OfferState
}

const OfferDetails: React.FunctionComponent<{ props?: OfferDetailsProps }> = ({ props }) => {
  const offer: OfferState = props?.offer || offerInitialState

  return (
    <DefaultLayout>
      <h1>hejka</h1>
      <h3>{offer.title || 'Tytuł oferty'}</h3>
      <h3>{offer.company || 'Firma'}</h3>
      <h3>{offer.location || 'Lokalizacja'}</h3>
      <h3>{offer.salary || 'Stawka'}</h3>
      <h3>{offer.aboutCompany || 'O firmie'}</h3>
      <h3>{offer.role || 'Twoja rola'}</h3>
      <h3>{offer.yourTasks || 'Twoje zadania'}</h3>
      <h3>{offer.expectations || 'Oczekiwania'}</h3>
      <h3>{offer.benefits || 'Benefity'}</h3>
    </DefaultLayout>
  )
}

export default OfferDetails
