import React from 'react'
import Container from './layouts/Container'
import Flex from './layouts/Flex'
import Title from './layouts/Title'
import Product from './layouts/Product'
import Bestseller1 from '../assets/Bestseller1.png'
import Bestseller2 from '../assets/Bestseller2.png'
import Bestseller3 from '../assets/Bestseller3.png'
import Bestseller4 from '../assets/Bestseller4.png'


const Bestsellers = () => {
  return (
    <section className='py-[100px]'>
        <Container>
        <Title title={"Our Bestsellers"} />
        <Flex>
        <Product
            showBadge={true}
            showColorChoice={false}
            productImg={Bestseller1}
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
            productImg={Bestseller2}
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
            productImg={Bestseller3}
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
            productImg={Bestseller4}
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

export default Bestsellers