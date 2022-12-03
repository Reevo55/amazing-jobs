import DefaultLayout from '../layouts/DefaultLayout'
import React from 'react'
import { OfferState } from '../types/types'

export interface OfferDetailsProps {
  offer: OfferState
}

const OfferDetails: React.FunctionComponent<{ props?: OfferDetailsProps }> = ({ props }) => {
  return (
    <DefaultLayout>
      <h1>hejka</h1>
      <h3>{props!.offer.title}</h3>
      <h3>{props!.offer.company}</h3>
      <h3>{props!.offer.location}</h3>
      <h3>{props!.offer.salary}</h3>
      <h3>{props!.offer.aboutCompany}</h3>
      <h3>{props!.offer.role}</h3>
      <h3>{props!.offer.yourTasks}</h3>
      <h3>{props!.offer.expectations}</h3>
      <h3>{props!.offer.benefits}</h3>
    </DefaultLayout>
  )
}

export default OfferDetails
