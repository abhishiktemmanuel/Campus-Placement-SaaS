import React from 'react'
import Applications from '../Applications.jsx'
import rows from '../../testData/rows'

export default function OpenApplications() {
  return (
    <div className='flex'>
      <Applications rows={rows} />
    </div>
  )
}

