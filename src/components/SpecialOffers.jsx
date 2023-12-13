import React from 'react'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Title from './layouts/Title'
import Product from './layouts/Product'
import SO1 from '../assets/SO1.png'
import SO2 from '../assets/SO2.png'
import SO3 from '../assets/SO3.png'
import SO4 from '../assets/SO4.png'

const SpecialOffers = () => {
  return (
    <section className='py-[100px]'>
        <Container>
        <Title title={"Our Bestsellers"} />
        <Flex>
        <Product
            showBadge={true}
            showColorChoice={false}
            productImg={SO1}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black|white|red"}
            className={'mr-10'}
            hoverClassName={'bottom-[88px]'}
          />
        <Product
            showBadge={true}
            showColorChoice={false}
            productImg={SO2}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white"}
            className={'mr-10'}
            hoverClassName={'bottom-[88px]'}
          />
        <Product
            showBadge={true}
            showColorChoice={false}
            productImg={SO3}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black|white|red"}
            className={'mr-10'}
            hoverClassName={'bottom-[88px]'}
          />
        <Product
            showBadge={true}
            showColorChoice={true}
            productImg={SO4}
            productName={"Basic Crew Neck Tee"}
            productPrice={"$44.00"}
            badgeTitle={"New"}
            colorChoice={"black | white"}
            hoverClassName={'bottom-[88px]'}
          />
        </Flex>
    </Container>
    </section>
  )
}

export default SpecialOffers