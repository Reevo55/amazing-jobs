import { OfferState } from '../../types/types'

export const ON_OFFER_CHANGED = 'ON_OFFER_CHANGED'

export const onOfferChanged = (offer: OfferState) => ({
  type: ON_OFFER_CHANGED,
  payload: { offer },
})
