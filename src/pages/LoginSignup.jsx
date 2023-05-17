import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import { CardArea } from '../components/common/Card';
import { styled } from 'styled-components';
import Text from '../components/common/Text';
import InputBox from '../components/common/InputBox';
import Button from '../components/common/Button';
import useInput from '../hooks/useInput';
import { useMutation } from 'react-query';
import { idValidationPost, loginPost, signupPost } from '../api/user';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const navigate = useNavigate();
  //로그인 완료 시, 홈으로 보내기 위한 네비게이트
  const goHome = () => {
    navigate('/');
  };
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
  //비밀번호 유효성 검사 실패 시 뜨는 메세지
  const [notValidation, setNotValidation] = useState('');

  //login 제출
  const loginMutation = useMutation(loginPost, {
    onSuccess: (data) => {
      Cookies.set('accessToken', data.accessToken);
      Cookies.set('refreshToken', data.refreshToken);
      goHome();
    },
    onError: (error) => {
      alert(error.response.data.errorMessage);
    },
  });

  const loginHandleSubmit = (e) => {
    e.preventDefault();
    const user = {
      nickname: loginId,
      password: loginPw,
    };

    loginMutation.mutate(user);
  };

  //닉네임 중복검사
  const validationMutation = useMutation(idValidationPost, {
    onSuccess: (data) => {
      if (data.message) {
        alert('사용가능한 아이디입니다.');
      }
    },
    onError: (error) => {
      if (!error.response.data.message) {
        alert('이미 사용중인 아이디입니다.');
      }
    },
  });
  const idValidationHandler = () => {
    validationMutation.mutate({
      nickname: signupId,
    });
  };
  // 비밀번호 형식 검사
  const checkPw = () => {
    const reg = /[a-zA-Z0-9]{8,}/gi;

    if (false === reg.test(signupPw)) {
      setNotValidation('비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자를 모두 포함해야 합니다.');
      return;
    }
  };

  //signup 제출
  const signupMutation = useMutation(signupPost, {
    onSuccess: (data) => {
      alert(data.message);
      goHome();
    },
    onError: (error) => {
      alert(error.response.data.errorMessage);
    },
  });
  const signupHandleSubmit = (e) => {
    e.preventDefault();
    checkPw();
    const newUser = {
      nickname: signupId,
      password: signupPw,
      confirmpassword: signupConfirmPw,
      email: signupEmail,
      location: signupLocation,
      introduction: signupItro,
    };

    //비밀번호와 비밀번호 확인 검증
    if (signupPw === signupConfirmPw) {
      signupMutation.mutate(newUser);
    } else {
      alert('비밀번호 확인이 비밀번호와 다릅니다.');
    }
  };

  return (
    <Layout>
      <Container>
        <CardArea height={'900px'} width={350}>
          <form onSubmit={loginHandleSubmit}>
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
                  required
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
                  required
                />
              </InputItem>
              <Button width={'112px'} height={'40px'} bc={'#fff'} shadow={'1px 1px 5px 1px #BEB47D'}>
                <Text fontSize={'15px'}>로그인</Text>
              </Button>
            </CardDesc>
          </form>
        </CardArea>
        <CardArea height={'900px'} width={350}>
          <form onSubmit={signupHandleSubmit}>
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
              <Button
                width={'112px'}
                height={'23px'}
                bc={'#fff'}
                shadow={'1px 1px 5px 1px #BEB47D'}
                onClick={idValidationHandler}
                type={'button'}>
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
                {notValidation ? (
                  <Text color={'red'} fontSize={'10px'} margin={'10px 0 0 0'}>
                    {notValidation}
                  </Text>
                ) : (
                  <Text fontSize={'10px'} margin={'10px 0 0 0'}>
                    유효성검사
                  </Text>
                )}
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
              <Button type={'reset'} width={'112px'} height={'40px'} bc={'#fff'} shadow={'1px 1px 5px 1px #BEB47D'}>
                <Text fontSize={'15px'}>회원가입</Text>
              </Button>
            </CardDesc>
          </form>
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
