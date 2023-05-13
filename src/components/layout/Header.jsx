import React from 'react';
import { styled } from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <h1>감자 마켓</h1>
      <div>중고 매물</div>
      <div>인기 매물</div>
      <div>나의 거래</div>
      <input />
      <button>로그인</button>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  background-color: aqua;
`;
export default Header;
