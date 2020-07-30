import React from 'react'

import './Menu.css'
import Logo from '../../assets/LogoMain.svg'
import Button from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logomarca Aluraflix" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu
