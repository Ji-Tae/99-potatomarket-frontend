import React from 'react';
import Card from '../components/common/Card';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Text from '../components/common/Text';
import Button from '../components/common/Button';

function UserMyPage() {
  return (
    <Layout>
      <PostTitle>나의 거래</PostTitle>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
          right: '10%',
        }}>
        <Button width={'10%'} height={'45px'} bc={'#9e7979'}>
          <Text fontSize={'25px'} fontWeight={'bold'} color={'#ffffff'}>
            글쓰기
          </Text>
        </Button>
      </div>
      {/* 관심목록 */}
      <CardList>
        <Title>관심목록</Title>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </CardList>

      {/* 판매중 */}
      <CardList>
        <Title>판매중</Title>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </CardList>

      {/* 거래완료 */}
      <CardList>
        <Title>거래 완료</Title>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </CardList>
    </Layout>
  );
}

export default UserMyPage;

const CardList = styled.div`
  width: 100%;
  margin: 100px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`;

const Title = styled.div`
  color: rgba(158, 121, 121, 1);
  font-size: 25px;
  font-weight: 700;
  margin: 0 0 1rem;
`;
const Cards = styled.div`
  gap: 50px;
  display: flex;
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  color: rgba(190, 180, 125, 1);
  margin-top: 70px;
`;
