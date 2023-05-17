import React, { useEffect, useState } from 'react';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import Text from '../components/common/Text';
import { styled } from 'styled-components';
import { HeartOutlined, HeartFilled, MessageOutlined, EyeOutlined } from '@ant-design/icons';
import InputBox from '../components/common/InputBox';
import { useParams } from 'react-router-dom';
import { getGoodsDetail } from '../api/posts';
import { useMutation } from 'react-query';

function GoodsDetail() {
  const { post_id } = useParams();

  const [details, setDetails] = useState(null);
  const detailsMutation = useMutation(getGoodsDetail, {
    onSuccess: (response) => {
      setDetails(response.data);
    },
  });
  useEffect(() => {
    detailsMutation.mutate(post_id);
  }, []);

  return (
    <Layout>
      <Container>
        <Button width={'15%'} height={'50px'} bc={'white'} outlinecolor={'#beb47d'} linewidth={'2px'}>
          <Text fontSize={'22px'} fontWeight={'700'} color={'#beb47d'}>
            ◀︎ 뒤로가기
          </Text>
        </Button>
        <div></div>
        <CardPhoto>
          <img alt='' src={details?.photo_url} />
        </CardPhoto>
        <UserDesc>
          <Text fontSize={'22px'} fontWeight={'bold'}>
            {details?.nickname}
          </Text>
          <Text fontSize={'17px'} fontWeight={'bold'} color={'#636363'}>
            {details?.location}
          </Text>
          <hr />
        </UserDesc>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <GoodsDesc>
            <Text fontSize={'25px'} fontWeight={'bold'}>
              {details?.title}
            </Text>
            <Text fontSize={'20px'} fontWeight={'bold'} color={'#434343'}>
              {details?.price} 원
            </Text>
            <Text fontSize={'20px'} fontWeight={'regular'} color={'#434343'}>
              {details?.content}
            </Text>
            <GoodsCounts>
              <span style={{ marginRight: '15px' }}>
                <HeartOutlined />
                &nbsp; {details?.likes}
              </span>
              <span style={{ marginRight: '15px' }}>
                <MessageOutlined />
                &nbsp; 0
              </span>
              <span style={{ marginRight: '15px' }}>
                <EyeOutlined />
                &nbsp; {details?.views}
              </span>
            </GoodsCounts>
          </GoodsDesc>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button width={'15%'} height={'50px'} bc={'#9e7979'}>
              <Text fontSize={'20px'} fontWeight={'bold'} color={'#ffffff'}>
                거래 채팅하기
              </Text>
            </Button>
          </div>
        </div>

        <hr />
        <CommentArea>
          <hr />
          <CommentInput>
            <InputBox width={'80%'} height={'50px'}></InputBox>
            <div style={{ display: 'flex', width: '20%', justifyContent: 'flex-end' }}>
              <Button width={'75%'} height={'50px'} bc={'#9e7979'}>
                <Text fontSize={'21px'} fontWeight={'bold'} color={'#ffffff'}>
                  등록하기
                </Text>
              </Button>
            </div>
          </CommentInput>
          <Comments>
            <Comment>
              <div style={{ width: '13%', fontSize: '22px', fontWeight: '600' }}>닉네임</div>
              <div style={{ width: '65%', fontSize: '22px', fontWeight: '400' }}>댓글 내용</div>
              <Buttons>
                <Button width={'45%'} height={'40px'} bc={'#ffffff'} outlinecolor={'#9e7979'} linewidth={'3px'}>
                  수정
                </Button>
                <Button width={'45%'} height={'40px'} bc={'#ead7d7'} outlinecolor={'#9e7979'} linewidth={'3px'}>
                  삭제
                </Button>
              </Buttons>
            </Comment>
          </Comments>
        </CommentArea>
      </Container>
    </Layout>
  );
}

export default GoodsDetail;

const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
`;
const CardPhoto = styled.div`
  width: 60%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
  }
  /* background-color:aqua; */
`;
const UserDesc = styled.div`
  margin-top: 20px;
  line-height: 2;
`;
const GoodsDesc = styled.div`
  line-height: 2;
`;
const GoodsCounts = styled.div`
  margin-top: 50px;
  margin-bottom: 10px;
`;
const CommentArea = styled.div``;
const CommentInput = styled.div`
  margin-top: 25px;
  margin-bottom: 40px;
  display: flex;
`;
const Comments = styled.div`
  border-radius: 12px;
  background-color: white;
  box-shadow: 1px 1px 7px 1px rgba(190, 180, 125, 0.26);
  padding: 7px;
`;
const Comment = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Buttons = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
`;
