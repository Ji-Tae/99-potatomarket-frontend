import React from 'react';
import Card from '../components/common/Card';
import { styled } from 'styled-components';

function UsedGoods() {
  return (
<>
    <Container>
      {/* 관심목록 */}
      <LikeList>
        <LikeListTitle>
        </LikeListTitle>
        <Cards>
          <Card width={`15%`} />
        </Cards>
      </LikeList>
      {/* 판매중 */}
      <SellingList>
        <SellingListTitle>
        </SellingListTitle>
        <Cards>
          <Card width={`15%`} />
        </Cards>
      </SellingList>
      {/* 거래완료 */}
      <DoneList>
        <DoneListTitle>
        </DoneListTitle>
        <Cards>
          <Card width={`15%`} />
        </Cards>
      </DoneList>
    </Container>
    </>
  )
}

export default UsedGoods;

const Container = styled.div``
const LikeList = styled.div``
const LikeListTitle = styled.div``
const Cards = styled.div``
const SellingList = styled.div``
const SellingListTitle = styled.div``
const DoneList = styled.div``
const DoneListTitle = styled.div``