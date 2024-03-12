import React from 'react'
import CardList from '../card-scroll/CardScroller'
import Applications from '../Applications'
import cardsData from '../../testData/cardsData'
import rows from '../../testData/rows'

function Home() {
  return (
    <div>
      <div>
            <CardList cards={cardsData} />
            <Applications rows={rows} />
      </div>
    </div>
  )
}

export default Home
