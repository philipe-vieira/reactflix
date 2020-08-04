import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';
import Logo from '../../assets/LogoMain.svg';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logomarca Aluraflix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
