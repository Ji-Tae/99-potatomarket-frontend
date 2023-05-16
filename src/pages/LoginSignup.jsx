import React from 'react';
import Layout from '../components/common/Layout';
import { CardArea } from '../components/common/Card';
import { styled } from 'styled-components';
import Text from '../components/common/Text';
import InputBox from '../components/common/InputBox';
import Button from '../components/common/Button';
import useInput from '../hooks/useInput';
function LoginSignup() {
  // 로그인 인풋 관리
  const [loginId, loginIdHandler] = useInput(); //아이디
  const [loginPw, loginPwHandler] = useInput(); //비밀번호

  //화원가입 인풋 관리
  const [signupEmail, signupEmailHandler] = useInput(); //이메일
  const [signupId, signupIdHandler] = useInput(); //아이디
  const [signupPw, signupPwHandler] = useInput(); //비밀번호
  const [signupConfirmPw, signupConfirmPwHandler] = useInput(); //비밀번호 확인
  const [signupLocation, signupLocationHandler] = useInput(); //사는 지역
  const [signupItro, signupItroHandler] = useInput(); //소개

  return (
    <Layout>
      <Container>
        <CardArea height={'800px'}>
          <CardDesc>
            <Text fontSize={'40px'} margin={'15px 0 0 0'}>
              로그인
            </Text>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>아이디</Text>
              <InputBox
                placeholder={'아이디를 입력해주세요'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={loginId}
                onChange={loginIdHandler}
                type={'text'}
              />
            </InputItem>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>비밀번호</Text>
              <InputBox
                placeholder={'비밀번호를 입력해주세요'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={loginPw}
                onChange={loginPwHandler}
                type={'password'}
              />
            </InputItem>
            <Button width={'112px'} height={'40px'} bc={'#fff'} shadow={'1px 1px 5px 1px #BEB47D'}>
              <Text fontSize={'15px'}>로그인</Text>
            </Button>
          </CardDesc>
        </CardArea>

        <CardArea height={'800px'}>
          <CardDesc>
            <Text fontSize={'40px'} margin={'15px 0 0 0'}>
              회원가입
            </Text>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>이메일</Text>
              <InputBox
                placeholder={'email@gmail.com'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={signupEmail}
                onChange={signupEmailHandler}
                type={'email'}
                pattern={'.+@gmail.com'}
                required
              />
            </InputItem>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>아이디</Text>
              <InputBox
                placeholder={'원하시는 아이디를 입력해주세요'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={signupId}
                onChange={signupIdHandler}
                type={'text'}
              />
            </InputItem>
            <Button width={'112px'} height={'23px'} bc={'#fff'} shadow={'1px 1px 5px 1px #BEB47D'}>
              <Text fontSize={'10px'}>중복 확인</Text>
            </Button>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>비밀번호</Text>
              <InputBox
                placeholder={'비밀번호를 입력해주세요'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={signupPw}
                onChange={signupPwHandler}
                type={'password'}
              />
            </InputItem>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>비밀번호 확인</Text>
              <InputBox
                placeholder={'비밀번호를 확인 해주세요'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={signupConfirmPw}
                onChange={signupConfirmPwHandler}
                type={'password'}
              />
            </InputItem>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>사는 지역</Text>
              <InputBox
                placeholder={'ex) 경기도 시흥시'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={signupLocation}
                onChange={signupLocationHandler}
                type={'text'}
              />
            </InputItem>
            <InputItem margin={'20px'}>
              <Text fontSize={'10px'}>소개</Text>
              <InputBox
                placeholder={'본인을 소개 해주세요(선택)'}
                width={'250px'}
                height={'52px'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                padding={'0 0 0 20px'}
                value={signupItro}
                onChange={signupItroHandler}
                type={'text'}
              />
            </InputItem>
            <Button width={'112px'} height={'40px'} bc={'#fff'} shadow={'1px 1px 5px 1px #BEB47D'}>
              <Text fontSize={'15px'}>로그인</Text>
            </Button>
          </CardDesc>
        </CardArea>
      </Container>
    </Layout>
  );
}
const Container = styled.div`
  height: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const InputItem = styled.div`
  margin: ${({ margin }) => `${margin}`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default LoginSignup;
