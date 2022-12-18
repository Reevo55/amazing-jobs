import DefaultLayout from '../layouts/DefaultLayout'
import React, { useState } from 'react'
import { OfferState } from '../types/types'
import { offerInitialState } from '../store/reducers/offerReducer'
import OfferHeader from '../components/OfferDetails/OfferHeader/OfferHeader'
import ApplicationForm from '../components/OfferDetails/ApplicationForm/ApplicationForm'
import OfferBody from '../components/OfferDetails/OfferBody/OfferBody'

export interface OfferDetailsProps {
  offer: OfferState
}

const OfferDetails: React.FunctionComponent<{ props?: OfferDetailsProps }> = ({ props }) => {
  const offer: OfferState = props?.offer || offerInitialState
  const [isApplication, setIsApplication] = useState(false)

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
        {isApplication ? (
          <ApplicationForm
            cvs={['Nazwa CV', 'Nazwa CV2']}
            legal={offer.legal || 'Nie podano'}
            back={() => setIsApplication(false)}
            apply={() => console.log('Apply')}
          />
        ) : (
          <OfferBody
            aboutCompany={offer.aboutCompany || 'Nie podano'}
            role={offer.role || 'Nie podano'}
            yourTasks={offer.yourTasks || 'Nie podano'}
            expectations={offer.expectations || 'Nie podano'}
            benefits={offer.benefits || 'Nie podano'}
            apply={() => setIsApplication(true)}
            compare={() => console.log('Compare')}
          />
        )}
      </div>
    </DefaultLayout>
  )
}

export default OfferDetails
