import React from 'react';
import { css, styled } from 'styled-components';

//외곽선이 보이는 버튼입니다.
function Button(props) {
  //프롭스를 구조분해 할당 해서 선언 한 겁니다.
  //bc: background-color
  //outlinecolor: 외과 선 색입니다.
  //linewidth: 선의 굵기입니다.
  //color: 글씨 색입니다.
  //상위 폴더의 버튼 props에 linewidth가 없다면 외각선이 보이지 않습니다.
  const { children, bc, width, height, outlinecolor, linewidth } = props;

  return (
    <ButtonStyled bc={bc} width={width} height={height} outlinecolor={outlinecolor} linewidth={linewidth}>
      {children}
    </ButtonStyled>
  );
}
const ButtonStyled = styled.button`
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  border-radius: 12px;
  background-color: ${({ bc }) => `${bc}`};
  ${({ outlinecolor, linewidth }) =>
    linewidth
      ? css`
          border: ${linewidth} solid ${outlinecolor};
        `
      : css`
          border: none;
        `}

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(90%);
  }
  cursor: pointer;
`;

export default Button;
