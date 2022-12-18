import React, { useState } from 'react'
import './ApplicationForm.css'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'

const LEGAL_TEXT =
  'W procesie rekrutacji wymagane może być załączenie zgód na niezbędne przetwarzanie danych, które zostały dostosowane przez pracowadcę. Zaznacz zgodę, a zrobimy to za ciebie, lub zrób to sam w naszym generatorze CV'

export interface ApplicationFormProps {
  legal: string
  cvs: string[]
  back: () => void
  apply: () => void
}

const ApplicationForm = ({ legal, cvs, back, apply }: ApplicationFormProps) => {
  const createMarkup = (htmlValue: string) => {
    return { __html: htmlValue }
  }

  const [selectedCV, setSelectedCV] = useState('')
  const [legalAgreed, setLegalAgreed] = useState(false)

  const renderCVs = () => {
    return (
      <FormGroup>
        {cvs.map(cv => (
          <FormControlLabel
            key={cv}
            control={<Checkbox checked={selectedCV === cv} onClick={() => setSelectedCV(cv)} />}
            label={cv}
          />
        ))}
      </FormGroup>
    )
  }

  return (
    <div id={'application-body'} className={'offer-body px-4 py-4'}>
      <div id={'application-content'} className={''}>
        <div id={'select-cv'} className={'mt-4'}>
          <div id={'select-cv'} className={'text-3xl font-bold leading-9'}>
            Wybierz CV
          </div>
          <div>{renderCVs()}</div>
        </div>
        <div id={'application-legal'} className={'mt-4'}>
          <div id={'select-cv'} className={'text-3xl font-bold leading-9'}>
            Wymagane zgody
          </div>
          <div id={'select-cv'} className={'text-sm text-slate-300'}>
            {LEGAL_TEXT}
          </div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(legal)} />
          <FormControlLabel
            control={<Checkbox checked={legalAgreed} onClick={() => setLegalAgreed(!legalAgreed)} />}
            label={'Dołącz powyższe zgody'}
          />
        </div>
        <div id={'contact-data'} className={'mt-4'}>
          <div id={'select-cv'} className={'text-3xl font-bold leading-9'}>
            Sprawdź dane kontaktowe
          </div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(legal)} />
        </div>
      </div>
      <div id={'application-footer'} className={'grid grid-cols-2 gap-2 mt-8'}>
        <div id={'back-button'} className={''}>
          <button className={'back-button tracking-wide hover:bg-slate-300 py-2 px-4 rounded'} onClick={back}>
            Wróć
          </button>
        </div>
        <div id={'apply-button'} className={'text-right mr-8'}>
          <button className={'apply-button tracking-wide hover:bg-blue-500 py-2 px-4 rounded'} onClick={apply}>
            Aplikuj
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
