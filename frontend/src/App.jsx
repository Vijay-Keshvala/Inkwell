import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TopPublishers from './components/TopPublishers'
import { TopCategories } from './components/TopCategories'
import { Promotions } from './components/Promotions'
import UserExperience from './components/UserExperience'
import { Statistics } from './components/Statistics'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <TopCategories/>
    <TopPublishers/>
    <Promotions/>
    <UserExperience/>
    <Statistics/>
    <Footer/>
    </>
  )
}

export default App
