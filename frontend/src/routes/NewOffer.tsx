import DefaultLayout from '../layouts/DefaultLayout'
import React from 'react'
import { AppState, OfferState } from '../types/types'
import { connect } from 'react-redux'

interface NewOfferProps {
  offer: OfferState
}

const NewOffer: React.FunctionComponent<{ props?: NewOfferProps }> = ({ props }) => {
  return (
    <DefaultLayout>
      <h1>hejka</h1>
    </DefaultLayout>
  )
}

export default connect(
  (state: AppState): NewOfferProps => ({
    offer: state.offerState,
  })
)(NewOffer)
