import React from 'react';
import styled, { css } from 'styled-components';
import PropType from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0px 5%;

  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function Template({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}
Template.defaultProps = {
  paddingAll: null,
};
Template.propTypes = {
  children: PropType.node.isRequired,
  paddingAll: PropType.number,
};

export default React.memo(Template);
