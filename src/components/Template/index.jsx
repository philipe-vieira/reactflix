import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0px 5%;
`;

function Template({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

Template.propTypes = {
  children: PropType.node.isRequired,
}

export default React.memo(Template);
