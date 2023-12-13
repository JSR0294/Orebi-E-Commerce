import React from 'react'
import Container from './layouts/Container'
import Img from './layouts/Img'
import ads2 from '../assets/Ads2.png'
import { Link } from 'react-router-dom'

const Ads2 = () => {
  return (
    <Container>
        <div className='py-[130px]'>
            <Link to =""><Img src={ads2} alt={ads2}/></Link>
        </div>
    </Container>
  )
}

export default Ads2