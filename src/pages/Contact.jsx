import React from 'react'
import Container from '../components/layouts/Container'
import Breadcrumb from '../components/layouts/Breadcrumb'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section>
      <Container>
        <Breadcrumb pageTitle={window.location.pathname.split('/')[1]} pathName={window.location.pathname.split('/')[1]} path={window.location.pathname}/>
        <ContactForm/>
        <div>
          <iframe className=' w-full h-[570px] my-[140px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.3641274077404!2d-75.36304322354022!3d40.4450770539128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4220529fa56a9%3A0x4bb946e5bbde9b8a!2sGrocery%20Outlet!5e0!3m2!1sen!2sbd!4v1703076531363!5m2!1sen!2sbd"></iframe>
        </div>
      </Container>
    </section>
  )
}

export default Contact