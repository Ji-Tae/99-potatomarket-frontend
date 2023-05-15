import React from 'react';
import Card from '../components/common/Card';
import styled from 'styled-components';
import { Layout } from '../components/common/Layout';

function UsedGoods() {
  return (
    <Layout>
      {/* 관심목록 */}

      <CardList>
        <Title>관심목록</Title>
        <Cards>
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
        </Cards>
      </CardList>

      {/* 판매중 */}

      <CardList>
        <Title>판매중</Title>
        <Cards>
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
        </Cards>
      </CardList>

      {/* 거래완료 */}

      <CardList>
        <Title>거래 완료</Title>
        <Cards>
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
        </Cards>
      </CardList>
    </Layout>
  );
}

export default UsedGoods;

const CardList = styled.div`
  width: 100%;
  margin: 100px 0px;
`;
const Title = styled.div`
  padding-left: 115px;
`;
const Cards = styled.div`
  gap: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
