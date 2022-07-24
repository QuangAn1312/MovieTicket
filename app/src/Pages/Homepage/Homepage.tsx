import React from 'react'
import Banner from './Banner'
import MovieShow from './MovieShow'
import Footer from './Footer'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
    <Banner/>
    <MovieShow/>
    <Footer/>
    </div>
   
  )
}

export default Homepage;