import { ComparatorState } from '../../types/types'
import { AnyAction } from '@reduxjs/toolkit'
import { ON_COMPARE_OFFER_ADDED, ON_COMPARE_OFFER_REMOVED } from '../actions/comparator'

export const comparatorInitialState: ComparatorState = {
  toCompare: [],
}

const comparatorReducer = (state = comparatorInitialState, action: AnyAction): ComparatorState => {
  const { offer } = action.payload || {}
  let offerList = state.toCompare
  switch (action.type) {
    case ON_COMPARE_OFFER_ADDED:
      if (offer.id === undefined) throw new Error('offer without id')
      const duplicateId = state.toCompare.findIndex(obj => {
        return obj.id == offer.id
      })
      if (duplicateId > -1) throw new Error('offer already in store')
      offerList.push(offer)
      return {
        ...state,
        toCompare: offerList,
      }
    case ON_COMPARE_OFFER_REMOVED:
      if (offer.id === undefined) throw new Error('offer without id')
      const objectIndex = state.toCompare.findIndex(obj => {
        return obj.id == offer.id
      })
      if (objectIndex < 0) throw new Error('offer not in store')
      offerList.splice(objectIndex, 1)
      return {
        ...state,
        toCompare: offerList,
      }
    default:
      return state
  }
}

export default comparatorReducer
