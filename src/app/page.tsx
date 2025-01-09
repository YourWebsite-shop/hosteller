import { Box , Button} from '@chakra-ui/react'
import React from 'react'
import Hero from '@/components/Hero'
import Discover from '@/components/Discover'
import RoomsInclude from '@/components/RoomsInclude'
import Adventure from '@/components/Adventure'
import Footer from '@/components/Footer'



import EnjoyStay from '@/components/EnjoyStay'

const Home = () => {
  return (
    <Box>
      <Hero />
      <Discover />
      <RoomsInclude />
      <Adventure />
      <EnjoyStay />
      <Footer />
    </Box>
  )
}

export default Home
