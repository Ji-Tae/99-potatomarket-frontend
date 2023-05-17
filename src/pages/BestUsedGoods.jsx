import React from 'react';
import Layout from '../components/common/Layout';
import styled from 'styled-components';
import Card from '../components/common/Card';

function BestUsedGoods() {
  return (
    <Layout>
      <PostTitle>인기 매물</PostTitle>
      <CardList>
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

export default BestUsedGoods;

const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  color: rgba(190, 180, 125, 1);
  padding: 70px;
`;
const CardList = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`;

const Cards = styled.div`
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
`;
