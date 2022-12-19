import React from 'react'

type Props = {
  text: string
  title: string
}

const CompareItem = ({ text, title }: Props) => {
  return (
    <div className='mb-8 space-y-2'>
      <p className='font-bold text-gray-700'>{title}</p>
      <p className='text-gray-500'>{text || 'Brak'}</p>
    </div>
  )
}

export default CompareItem
