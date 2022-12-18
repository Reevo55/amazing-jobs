import { Dispatch } from 'redux'
import { MessageType, OfferState } from '../../types/types'
import { onIsLoadingChange } from '../actions/profile'
import { onShowStatusMessage } from '../actions/statusMessage'

export const createNewOfferAndRedirect = (userId: string, offer: OfferState) => {
  return (dispatch: Dispatch) => {
    dispatch(onIsLoadingChange(true))
    fetch('http://127.0.0.1:5000/jobs', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        offer_type: 'user',
        job_type: 'stacjonarna',
        position_name: offer.title,
        location: offer.location,
        company_name: offer.company,
        salary: offer.salary,
        short_description: offer.aboutCompany,
        required_experience: offer.expectations,
        required_skills: offer.role,
        things_to_do: offer.yourTasks,
        required_education: 'studia wyższe',
        benefits: offer.benefits,
        legal: offer.legal,
      }),
    })
      .then(res =>
        res.status == 200
          ? dispatch(
              onShowStatusMessage(
                'Sukces',
                'Pomyslnie utworzono ofertę',
                MessageType.success,
                () => (window.top!.location = '/')
              )
            )
          : dispatch(onShowStatusMessage('Coś poszło nie tak', 'Spróbuj ponownie później', MessageType.failure))
      )
      .catch(error => {
        console.error(error)
        dispatch(onShowStatusMessage('Coś poszło nie tak', 'Spróbuj ponownie później', MessageType.failure))
      })
      .finally(() => dispatch(onIsLoadingChange(false)))
  }
}
