import DefaultLayout from '../../layouts/DefaultLayout'
import React, { useState } from 'react'
import { MessageType, OfferState } from '../../types/types'
import { offerInitialState } from '../../store/reducers/offerReducer'
import OfferHeader from './OfferHeader/OfferHeader'
import ApplicationForm from './ApplicationForm/ApplicationForm'
import OfferBody from './OfferBody/OfferBody'
import { useAppDispatch } from '../../hooks'
import { onIsLoadingChange } from '../../store/actions/profile'
import { onShowStatusMessage } from '../../store/actions/statusMessage'

export interface OfferDetailsProps {
  offer: OfferState
}

const OfferDetails: React.FunctionComponent<{ props?: OfferDetailsProps }> = ({ props }) => {
  const offer: OfferState = props?.offer || offerInitialState
  const [isApplication, setIsApplication] = useState(false)
  const dispatch = useAppDispatch()

  const delay = (ms: number) => {
    return new Promise(res => setTimeout(res, ms))
  }

  const apply = async () => {
    dispatch(onIsLoadingChange(true))
    await delay(2137)
    dispatch(onIsLoadingChange(false))
    dispatch(
      onShowStatusMessage(
        'Sukces',
        'Pracodawca otrzymał twoją aplikację.',
        MessageType.success,
        () => (window.top!.location = '/')
      )
    )
  }

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
            apply={apply}
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
