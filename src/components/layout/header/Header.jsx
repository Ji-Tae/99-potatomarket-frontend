import React from 'react';
import { styled } from 'styled-components';
import Text from '../../common/Text';
import Button from '../../common/Button';
import SearchInput from './SearchInput';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header() {
  const cookie = Cookies.get('token');
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const goLogin = () => {
    navigate('/loginsignups');
  };

  const goMyPage = () => {
    navigate('/usermypages');
  };

  const goUsedGoods = () => {
    navigate('/usedgoods');
  };

  const goBestUsedGoods = () => {
    navigate('/bestusedgoods');
  };

  return (
    <HeaderContainer>
      <Items jc={'space-around'}>
        <TitleItemBox>
          <Text fontSize={'32px'} fontWeight={'bold'} color={'#BeB47d'} cursor={'pointer'} onClick={goHome}>
            감자 마켓
          </Text>
          <img
            src='https://img.freepik.com/premium-vector/pure-potato-with-hands-feet-and-face-vector-illustration-of-potato-character_469123-812.jpg'
            alt='타이틀 사진'
          />
        </TitleItemBox>
        <Text
          margin={'0px 20px 0px 40px'}
          fontSize={'24px'}
          fontWeight={600}
          color={'#9e7979'}
          cursor={'pointer'}
          onClick={goUsedGoods}>
          중고 매물
        </Text>
        <Text
          margin={'0px 20px 0px 20px'}
          fontSize={'24px'}
          fontWeight={600}
          color={'#9e7979'}
          cursor={'pointer'}
          onClick={goBestUsedGoods}>
          인기 매물
        </Text>
      </Items>
      <Items jc={'flex-end'}>
        <SearchInput />
        {cookie ? (
          <ButtonGrop>
            <Button
              margin={'0 10px 0 0'}
              width={'90px'}
              height={'42px'}
              outlinecolor={'#C6C7C0'}
              bc={'#fff'}
              linewidth={'1px'}
              onClick={goMyPage}>
              <Text>마이페이지</Text>
            </Button>
            <Button width={'71px'} height={'42px'} outlinecolor={'#C6C7C0'} bc={'#fff'} linewidth={'1px'}>
              <Text>로그아웃</Text>
            </Button>
          </ButtonGrop>
        ) : (
          <ButtonGrop>
            <Button
              width={'71px'}
              height={'42px'}
              outlinecolor={'#C6C7C0'}
              bc={'#fff'}
              linewidth={'1px'}
              onClick={goLogin}>
              <Text>로그인</Text>
            </Button>
          </ButtonGrop>
        )}
      </Items>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  max-width: 100vw;
  padding: 0px 120px 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  img {
    width: 60px;
    height: 45px;
  }
`;
const TitleItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Items = styled.div`
  min-width: 700px;
  display: flex;
  align-items: center;
  justify-content: ${({ jc }) => `${jc}`};
`;
const ButtonGrop = styled.div`
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
