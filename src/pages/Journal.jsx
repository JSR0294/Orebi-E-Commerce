import React from 'react'
import Container from '../components/layouts/Container'
import Breadcrumb from '../components/layouts/Breadcrumb'
import Flex from '../components/layouts/Flex'
import Img from '../components/layouts/Img'
import JournalPhoto from '../assets/JournalPhoto.jpg'
import { Link } from 'react-router-dom'

const Journal = () => {
  return (
    <section>
      <Container>
        <Breadcrumb pageTitle={window.location.pathname.split('/')[1]} pathName={window.location.pathname.split('/')[1]} path={window.location.pathname}/>
        <Flex className={' mb-[150px] justify-between'}>
          <div className=' w-[65%]'>
            <h3 className=' mb-[50px] text-5xl text-primaryColor font-semibold'>Product Journal</h3>
            <p className=' text-secondaryColor font-normal text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error cupiditate eligendi pariatur iure suscipit cumque nostrum mollitia iste, recusandae natus fuga alias eos deleniti corrupti. Ea, ipsum! Praesentium iusto animi illum nisi, eos cum nostrum dolore. Odit asperiores repellat impedit. Doloribus sint ab corrupti illum possimus ducimus omnis itaque eos ipsam amet quam velit vel, quidem, voluptate explicabo. Pariatur provident labore adipisci obcaecati vero voluptatum quod debitis minima! Natus modi doloremque voluptatibus! Error nobis modi suscipit velit et itaque numquam atque beatae eaque dolorem perspiciatis incidunt aperiam molestias asperiores ex reprehenderit qui sequi possimus, amet earum odio. Quaerat temporibus doloremque placeat numquam quis minima aliquid autem cum suscipit, est cupiditate vero dignissimos pariatur, voluptates ducimus aut consectetur. Assumenda reiciendis mollitia hic, reprehenderit natus aliquam accusantium cupiditate! Facilis quidem culpa quo tempore modi, laudantium non hic, nam dolores voluptatum facere eius in eveniet nihil nobis tenetur quasi recusandae itaque molestiae.</p>
            <Link to=''>
              <h5 className=' text-primaryColor text-base mt-4 font-bold'>Read More.</h5>
            </Link>
          </div>
          <div className=' w-[30%]'>
            <Img src={JournalPhoto}/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Journal