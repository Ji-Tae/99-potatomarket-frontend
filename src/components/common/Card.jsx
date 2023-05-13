import React from 'react';
import { styled } from 'styled-components';

function Card() {
  return (
    <CardArea>
      <CardPhoto>
        <img alt="갤럭시 Z 폴드 3 5G" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkvUeuk0KkCuS7JtUDjekOuOjaV0DHYAl4A&usqp=CAU"/>
      </CardPhoto>
      <CardDesc>
        <CardTitle>갤럭시 Z 폴드 3 5G</CardTitle>
        <CardPrice>400,000원</CardPrice>
        <Location>경기도 고양시 일산서구 주엽동</Location>
        <CardCounts>
          <likes>관심 21</likes>
          ∙
          <comments>채팅 5</comments>
        </CardCounts>
      </CardDesc>
    </CardArea>
  )
}

export default Card;

const CardArea = styled.div`
    width: calc(25% - 44px);
    margin-right: 44px;
    margin-bottom: 56px;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 1px 1px 7px 1px rgba(190, 180, 125, 0.26);
`

const CardPhoto = styled.div`
width: 100%;
    padding-top: 100%;
    position: relative;
    /* overflow: hidden; */
    border-radius: 12px;
    background-color: #F8F9FA;
    box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    img{
      position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 12px;
    border: 1px solid transparent;
    }
    `

const CardDesc = styled.div`
margin-top: 12px;
`
const CardTitle = styled.div`
    font-size: 16px;
    letter-spacing: -0.02px;
    color: #212529;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: normal;`

const CardPrice = styled.div`
font-size: 15px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 4px;
    `
const Location = styled.div`
font-size: 13px;
    color: #212529;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    line-height: 1.5;
`
const Likes = styled.div``
  
const Comments = styled.div``

const CardCounts = styled.div`
color: #868e96;
    font-size: 13px;
    `
