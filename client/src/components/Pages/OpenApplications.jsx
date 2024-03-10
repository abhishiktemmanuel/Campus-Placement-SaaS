import React from 'react'
import Applications from '../list'
import rows from '../../testData/rows'

function OpenApplications() {
  return (
    <div className='flex'>
      <Applications rows={rows} />
    </div>
  )
}

export default OpenApplications
