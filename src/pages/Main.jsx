import React from 'react';
import { styled, css } from 'styled-components';
import Text from '../components/common/Text';
import { Img1, Img2, Img3 } from '../Image/ImagesUrl';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const goUsedGoods = () => {
    navigate('/usedgoods');
  };
  const goBestUsedGoods = () => {
    navigate('/bestusedgoods');
  };

  return (
    <>
      <Container bc={'#fbf7f2'}>
        <Items left={'2%'}>
          <Introduction>
            <Text fontSize={'32px'} fontWeight={900}>
              와이프 몰래
              <br /> 플레이 스테이션을
              <br /> 사고 싶으신가요?
            </Text>
            <Text fontSize={'16px'} fontWeight={900} margin={'20px 0 0 0'} color={'#CA9C9C'}>
              몰래 사십시오.
              <br /> 싸게.
              <br /> 똑똑하게.
            </Text>
          </Introduction>
          <ImgBox Img={Img1} height={'658px'} width={'804px'} />
        </Items>
      </Container>
      <Container bc={'#fff'}>
        <Items rightmove={'2%'}>
          <ImgBox Img={Img2} height={'600px'} width={'500px'} />
          <Introduction>
            <Text fontSize={'32px'} fontWeight={900} margin={'0 0 30px 0'}>
              중고 직거래 마켓
            </Text>
            <Text fontSize={'16px'} fontWeight={900} margin={'20px 0 30px 0'} color={'#CA9C9C'}>
              많은 사람들과 따뜻한 거래를 <br />
              지금 경험해보세요.
            </Text>
            <Button width={'158px'} height={'47px'} bc={'#9E7979'} onClick={goUsedGoods}>
              <Text color={'#fff'} fontSize={'15px'} fontWeight={'700'}>
                중고물품 보러가기
              </Text>
            </Button>
          </Introduction>
        </Items>
      </Container>
      <Container bc={'#fbf7f2'}>
        <Items left={'2%'}>
          <Introduction>
            <Text fontSize={'32px'} fontWeight={900} margin={'0 0 30px 0'}>
              무엇이 인기 있나 봐볼까요?
            </Text>
            <Text fontSize={'16px'} fontWeight={900} margin={'20px 0 30px 0'} color={'#CA9C9C'}>
              인기있는 내양한 물건들을
              <br /> 만나보세요.
            </Text>
            <Button width={'158px'} height={'47px'} bc={'#9E7979'} onClick={goBestUsedGoods}>
              <Text color={'#fff'} fontSize={'15px'} fontWeight={'700'}>
                인기 물품 보러가기
              </Text>
            </Button>
          </Introduction>
          <ImgBox Img={Img3} height={'684px'} width={'532px'} />
        </Items>
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 658px;
  background-color: ${({ bc }) => `${bc}`};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Items = styled.div`
  display: flex;
  position: relative;
  ${({ rightmove }) =>
    rightmove
      ? css`
          right: ${rightmove};
        `
      : css`
          left: 2%;
        `}
`;
const Introduction = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const ImgBox = styled.div`
  height: ${({ height }) => `${height}`};
  width: ${({ width }) => `${width}`};
  background-size: ${({ width, height }) => `${width} ${height}`};
  background-image: ${({ Img }) => `url(${Img})`};
`;
export default Main;
