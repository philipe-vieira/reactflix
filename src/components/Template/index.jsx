import React from 'react'
import styled from 'styled-components'
import Menu from '../Menu'
import Footer from '../Footer'

function Template({ children }) {
  const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 0px 5%;
  `
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Template
