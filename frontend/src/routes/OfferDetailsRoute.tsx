import OfferDetails, { OfferDetailsProps } from '../components/OfferDetails/OfferDetails'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '../hooks'
import { onIsLoadingChange } from '../store/actions/profile'
import { onShowStatusMessage } from '../store/actions/statusMessage'
import { MessageType } from '../types/types'
export const OfferDetailsRoute = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const [offer, setOffer] = useState({
    offer: {
      title: '',
      location: '',
      salary: '',
      company: '',
      aboutCompany: '',
      role: '',
      yourTasks: '',
      expectations: '',
      benefits: '',
      legal: '',
    },
  })

  useEffect(() => {
    dispatch(onIsLoadingChange(true))
    getOffer()
      .then(data => setOffer(data))
      .catch(() => dispatch(onShowStatusMessage('Coś poszło nie tak', 'Spróbuj ponownie później', MessageType.failure)))
      .finally(() => dispatch(onIsLoadingChange(false)))
  }, [])

  const getOffer = async (): Promise<OfferDetailsProps> => {
    const jobId: string = searchParams.get('jobId') || ''
    const res = await fetch(`http://127.0.0.1:5000/jobs/${jobId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    const body = await res.json()
    return {
      offer: {
        title: body.position_name!,
        location: body.location!,
        salary: body.salary!,
        company: body.company_name!,
        aboutCompany: body.short_description!,
        role: body.required_skills!,
        yourTasks: body.things_to_do!,
        expectations: body.required_experience!,
        benefits: body.benefits!,
        legal: body.legal!,
      },
    }
  }
  return <OfferDetails props={offer} />
}
