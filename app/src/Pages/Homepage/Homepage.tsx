import React from 'react'
import Banner from './Banner'
import MovieShow from './MovieShow'
import Footer from './Footer'
import HomeMenu from './HomeMenu'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
    <Banner/>
    <MovieShow/>
    <HomeMenu/>
    <Footer/>
    </div>
   
  )
}

export default Homepage;