import React from 'react';
import Card from '../components/common/Card';
import  styled  from 'styled-components';
import { Layout } from '../components/common/Layout';

function UsedGoods() {
  return (
<Layout>
      {/* 관심목록 */}
      
      <LikeList>
        <LikeListTitle>
        </LikeListTitle>
        <Cards>
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
        </Cards>
      </LikeList>
      
      {/* 판매중 */}
     
      <SellingList>
        <SellingListTitle>
        </SellingListTitle>
        <Cards>
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
        </Cards>
      </SellingList>
    
      {/* 거래완료 */}
    
      <DoneList>
        <DoneListTitle>
        </DoneListTitle>
        <Cards>
          <Card width={`15%`} />
          <Card width={`15%`} />
          <Card width={`15%`} />
        </Cards>
      </DoneList>
      
    </Layout>
  )
}

export default UsedGoods;

const LikeList = styled.div`
width: 70%;
`
const LikeListTitle = styled.div``
const Cards = styled.div`
width:100%;
display: flex;
`
const SellingList = styled.div``
const SellingListTitle = styled.div``
const DoneList = styled.div``
const DoneListTitle = styled.div``