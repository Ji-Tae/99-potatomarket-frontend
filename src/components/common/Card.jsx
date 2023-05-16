import React from 'react';
import { styled } from 'styled-components';
import { HeartOutlined, HeartFilled, MessageOutlined } from '@ant-design/icons';

function Card({ width, children, height }) {
  return (
    <CardArea width={width} padding={'20px'}>

      <CardPhoto>
        <img
          alt='갤럭시 Z 폴드 3 5G'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkvUeuk0KkCuS7JtUDjekOuOjaV0DHYAl4A&usqp=CAU'
        />
      </CardPhoto>
      <CardDesc>
        <CardTitle>갤럭시 Z 폴드 3 5G</CardTitle>
        <Location>경기도 고양시 일산서구 주엽동</Location>
        <CardPrice>400,000원</CardPrice>
          <CardCounts>
          <span>
            <HeartOutlined />
            &nbsp; 21
          </span>
          <span>
            <MessageOutlined />
            &nbsp; 5
          </span>
        </CardCounts>
        {children}
      </CardDesc>
    </CardArea>
  );
}

export default Card;

export const CardArea = styled.div`
  width: ${({ width }) => {
    return width ? `${width}px` : '25%';
  }};
  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  border-radius: 12px;
  background-color:white;
  box-shadow: 1px 1px 7px 1px rgba(190, 180, 125, 0.26);
`;

const CardPhoto = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #f8f9fa;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid transparent;
  }
`;

const CardDesc = styled.div`
  margin-top: 12px;
`;
const CardTitle = styled.div`
  font-size: 16px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: 800;
`;

const CardPrice = styled.div`
  color: #826464;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
`;
const Location = styled.div`
  font-size: 13px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
`;

const CardCounts = styled.div`
  padding-top: 8px;
  font-size: 13px;
  display: flex;
  margin-left: 50%;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
`;

