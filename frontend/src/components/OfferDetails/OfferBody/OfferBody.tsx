import React from 'react'
import './OfferBody.css'

export interface OfferBodyProps {
  aboutCompany: string
  role: string
  yourTasks: string
  expectations: string
  benefits: string
  apply: () => void
  compare: () => void
}

const OfferBody = ({ aboutCompany, role, yourTasks, expectations, benefits, apply, compare }: OfferBodyProps) => {
  const createMarkup = (htmlValue: string) => {
    return { __html: htmlValue }
  }

  return (
    <div id={'offer-body'} className={'offer-bddy bg-black text-white px-4 py-4'}>
      <div id={'offer-content'} className={''}>
        <div className={'text-3xl font-bold leading-9'}>Szczegóły</div>
        <div id={'about-company'} className={'mt-4'}>
          <div className={'text-xl'}>O firmie:</div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(aboutCompany)} />
        </div>
        <div id={'about-role'} className={'mt-4'}>
          <div className={'text-xl'}>Twoja rola:</div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(role)} />
        </div>
        <div id={'about-tasks'} className={'mt-4'}>
          <div className={'text-xl'}>Twoje zadania:</div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(yourTasks)} />
        </div>
        <div id={'about-expectations'} className={'mt-4'}>
          <div className={'text-xl'}>Oczekiwania:</div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(expectations)} />
        </div>
        <div id={'about-benefits'} className={'mt-4'}>
          <div className={'text-xl'}>Benefity:</div>
          <div className={'bg-white text-black rounded-md p-1'} dangerouslySetInnerHTML={createMarkup(benefits)} />
        </div>
      </div>
      <div id={'offer-footer'} className={'my-16 grid grid-cols-2 gap-2'}>
        <div className={'ml-12 '}>
          <a
            role={'button'}
            className={'offer-button button-apply tracking-wide bg-white text-black px-4 py-2 rounded-full'}
            onClick={apply}>
            Aplikuj
          </a>
        </div>
        <div className={'text-right mr-12'}>
          <a
            role={'button'}
            className={'offer-button button-compare tracking-wide bg-white text-black px-4 py-2 rounded-full'}
            onClick={compare}>
            Porównaj
          </a>
        </div>
      </div>
    </div>
  )
}

export default OfferBody
