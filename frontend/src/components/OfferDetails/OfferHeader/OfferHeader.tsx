import React from 'react'
import './OfferHeader.css'

export interface OfferHeaderProps {
  title: string
  location: string
  salary?: string
  company: string
  isInternal?: boolean
  externalServiceName?: string
}

const OfferHeader = ({ title, company, location, salary, isInternal, externalServiceName }: OfferHeaderProps) => {
  return (
    <div id={'offer-header'} className={'offer-header text-white px-4 py-4'}>
      <div id={'offer-header-top'} className={'flow-root'}>
        <div id={'offer-company'} className={'float-left'}>
          {company}
        </div>
        <div id={'offer-source'} className={'float-right'}>
          <span className={'bg-white text-black text-sm px-4 py-2  border rounded-full'}>
            {isInternal ? 'Oferta Compare&Work' : externalServiceName}
          </span>
        </div>
      </div>
      <div id={'offer-title'} className={'text-xl font-bold leading-9'}>
        {title}
      </div>
      <div id={'offer-header-bottom'} className={'flow-root'}>
        <div id={'offer-location'} className={'float-left'}>
          {location}
        </div>
        {salary && (
          <div id={'offer-salary'} className={'float-right'}>
            {salary}
          </div>
        )}
      </div>
    </div>
  )
}

export default OfferHeader
