import React from 'react'
import Container from '../components/layouts/Container'
import Breadcrumb from '../components/layouts/Breadcrumb'

const Login = () => {
  return (
    <section>
      <Container>
        <Breadcrumb pageTitle={window.location.pathname.split('/')[1]} pathName={window.location.pathname.split('/')[1]} path={window.location.pathname}/>
      </Container>
    </section>
  )
}

export default Login