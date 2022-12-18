import DefaultLayout from '../layouts/DefaultLayout'
import React from 'react'
import { OfferState } from '../types/types'
import { offerInitialState } from '../store/reducers/offerReducer'
import OfferHeader from '../components/OfferDetails/OfferHeader/OfferHeader'
import OfferBody from '../components/OfferDetails/OfferBody/OfferBody'

export interface OfferDetailsProps {
  offer: OfferState
}

const OfferDetails: React.FunctionComponent<{ props?: OfferDetailsProps }> = ({ props }) => {
  const offer: OfferState = props?.offer || offerInitialState

  return (
    <DefaultLayout>
      <div className={'max-w-screen-md'} style={{ minWidth: '420px' }}>
        <OfferHeader
          company={offer.company || 'Nie podano'}
          title={offer.title || 'Nie podano'}
          location={offer.location || 'Nie podano'}
          salary={offer.salary || 'Nie podano'}
          isInternal={true}
          externalServiceName={'pracuj.pl'}
        />
        <OfferBody
          aboutCompany={offer.aboutCompany || 'Nie podano'}
          role={offer.role || 'Nie podano'}
          yourTasks={offer.yourTasks || 'Nie podano'}
          expectations={offer.expectations || 'Nie podano'}
          benefits={offer.benefits || 'Nie podano'}
          apply={() => console.log('Apply')}
          compare={() => console.log('Compare')}
        />
      </div>
    </DefaultLayout>
  )
}

export default OfferDetails
