import styled from 'styled-components';

import React from 'react';

function Layout({ children }) {
  return (
    <Container>
      <LayoutContainer>{children}</LayoutContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fbf7f2;
  padding-bottom: 70px;
`;
const LayoutContainer = styled.div`
  min-width: 800px;
  max-width: 1300px;
  margin: auto;
`;
export default Layout;
