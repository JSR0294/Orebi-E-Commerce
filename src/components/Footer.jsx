import React from 'react'
import Container from './layouts/Container'
import List from './layouts/List'
import ListItem from './layouts/ListItem'
import Flex from './layouts/Flex'
import Img from './layouts/Img'
import FooterLogo from '../assets/FooterLogo.png'
import {FaFacebookSquare,FaLinkedin,FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <footer className='py-14 bg-[#F5F5F3]'>
        <Container>
            <Flex className='flex-wrap'>
                <List className='w-[10%]'>
                    <h5 className='font-bold text-base mb-4 text-primaryColor'>MENU</h5>
                    <ListItem listName={'Home'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Shop'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'About'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Contact'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Journal'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                </List>
                <List className='w-[10%]'>
                    <h5 className='font-bold text-base mb-4 text-primaryColor'>SHOP</h5>
                    <ListItem listName={'Category 1'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Category 2'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Category 3'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Category 4'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Category 5'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                </List>
                <List className='w-[20%]'>
                    <h5 className='font-bold text-base mb-4 text-primaryColor'>HELP</h5>
                    <ListItem listName={'Privacy Policy'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Terms & Conditions'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Special E-shop'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Shipping'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                    <ListItem listName={'Secure Payments'} className=' text-[#6D6D6D] text-sm font-normal mb-1'/>
                </List>
                <div className='w-[35%]'>
                    <a href="tel:+(052) 611-5711" className='block font-bold text-primaryColor text-base'>(052) 611-5711</a>
                    <a href="mailto:company@domain.com" className='block font-bold text-primaryColor text-base font-dm'>company@domain.com</a>
                    <address className='text-[#6D6D6D] font-dm font-normal text-sm mt-4'>575 Crescent Ave. Quakertown, PA 18951</address>
                </div>
                <Img src={FooterLogo} alt={FooterLogo} className='w-[25%]'/>
            </Flex>
            <Flex className='mt-16 items-center justify-between'>
                <Flex className='text-2xl text-primaryColor gap-x-4 flex-wrap w-[75%]'>
                    <a href=""><FaFacebookSquare/></a>
                    <a href=""><FaLinkedin/></a>
                    <a href=""><FaInstagramSquare/></a>
                </Flex>
                    <h6 className='text-[#6D6D6D] font-normal text-sm w-[25%]'>{year} Orebi Minimal eCommerce Figma Template by Adveits</h6>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer