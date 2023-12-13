import React from 'react'
import Container from '../components/layouts/Container'
import Breadcrumb from '../components/layouts/Breadcrumb'

const SignUp = () => {
  return (
    <section>
      <section>
      <Container>
        <Breadcrumb pageTitle={'Sign Up'}  pathName={window.location.pathname.split('/')[1]} path={window.location.pathname}/>
      </Container>
    </section>
    </section>
  )
}

export default SignUp