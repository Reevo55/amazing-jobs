import { OfferState } from '../../types/types'

export const ON_COMPARE_OFFER_ADDED = 'ON_COMPARE_OFFER_ADDED'
export const ON_COMPARE_OFFER_REMOVED = 'ON_COMPARE_OFFER_REMOVED'

export const onCompareOfferAdded = (offer: OfferState) => ({
  type: ON_COMPARE_OFFER_ADDED,
  payload: { offer },
})

export const onCompareOfferRemoved = (offer: OfferState) => ({
  type: ON_COMPARE_OFFER_REMOVED,
  payload: { offer },
})
