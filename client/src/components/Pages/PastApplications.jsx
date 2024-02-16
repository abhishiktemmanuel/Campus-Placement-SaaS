import React from 'react'
import Applications from '../list'
import rows from '../../testData/rows'

function PastApplications() {
  return (
    <div>
        <Applications rows={rows} />
    </div>
  )
}

export default PastApplications
