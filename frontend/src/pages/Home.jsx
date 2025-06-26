import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicies from '../components/OurPolicies'
import NewsLetterBox from '../components/NewsLetterBox'
import NewHero from '../components/NewHero'

const Home = () => {
  return (
    <div>
      <NewHero/>
      <div className='lg:px-[5vh]'><LatestCollection/></div>
      <div className='lg:px-[5vh]'><BestSeller/></div>
      <OurPolicies/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home