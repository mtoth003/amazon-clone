import React from 'react'
import styled from "styled-components"
import NavBar from './NavBar'

function Home() {
  return (
    <Container>
      <NavBar/>
      <h1>Home Page</h1>
    </Container>
  )
}

const Container = styled.div`
  
`

export default Home