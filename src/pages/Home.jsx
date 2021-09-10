import React from 'react'
import Hero from '../Components/Hero/Hero'
import Perks from '../Components/Perks'
import Redsection from '../Components/Red'
import Review from '../Components/Review/Index'
import Yellow from '../Components/Yellow'

const Home = () => {
  return (
    <>
     <Hero/> 
     <Redsection/>
     <Yellow/>
    <Perks/>
    <Review/>
    </>
  )
}

export default Home
