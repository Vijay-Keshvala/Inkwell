import React from 'react'
import {NavBar} from '../components/NavBar'
import {TopPublishers } from '../components/TopPublishers'
import { TopCategories } from '../components/TopCategories'
import { Promotions } from '../components/Promotions'
import UserExperience from '../components/UserExperience'
import { Statistics } from '../components/Statistics'
import {Footer} from '../components/Footer'
import { Landing } from '../components/Landing'


const Home = () => {
  return (
    <div>
      <NavBar />
      <Landing/>
          <TopCategories />
            <TopPublishers />
            <Promotions />
            <UserExperience />
            <Statistics />
            <Footer/>
    </div>
  )
}

export default Home
