import React from 'react';
import { styled } from 'styled-components';
import Text from '../common/Text';

function Footer() {
  return (
    <FooterContainer>
      <Items>
        <TitleItemBox>
          <Text fontSize={'64px'} fontWeight={'bold'} color={'#BeB47d'}>
            감자 마켓
          </Text>
          <img
            src='https://img.freepik.com/premium-vector/pure-potato-with-hands-feet-and-face-vector-illustration-of-potato-character_469123-812.jpg'
            alt='타이틀 사진'
          />
        </TitleItemBox>
        <TextGrop>
          <Text fontSize={'40px'} fontWeight={900}>
            19조
          </Text>
          <Text fontSize={'20px'}>FE: 김민정, 박지태</Text>
          <Text fontSize={'20px'}>BE: 주지민, 조우상, 정하욱, 신원익</Text>
        </TextGrop>
      </Items>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  max-width: 100vw;
  padding: 100px 200px 0px 200px;
  height: 291px;
  img {
    width: 130px;
    height: 100px;
  }
`;
const TitleItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const TextGrop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
export default Footer;
