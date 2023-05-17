import React from 'react';
import  Layout  from '../components/common/Layout';
import  styled from 'styled-components';
import Card from '../components/common/Card';
import { useQuery } from 'react-query';
import { bestGoodsGet } from '../api/posts';

function BestUsedGoods() {

  const { isLoading, isError, data } = useQuery("bestgoods", bestGoodsGet);
console.log(data?.data)
  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  return (
    <Layout>
      <PostTitle>인기 매물</PostTitle>
      <CardList>
        <Cards>
          {data?.data[0].map((card) => {
            return <Card key={card.post_id} card={card}/>
          })}
        </Cards>
      </CardList>
    </Layout>
  )
}

export default BestUsedGoods;

const PostTitle = styled.div`
display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  color: rgba(190, 180, 125, 1);
  padding: 70px;
`
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