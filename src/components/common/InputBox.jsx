import React from 'react';
import { styled, css } from 'styled-components';

function InputBox(props) {
  //outlinecolor: 외과 선 색입니다.
  //linewidth: 선의 굵기입니다.
  const { outlinecolor, linewidth, placeholder, width, height, padding, margin } = props;
  return (
    <InputStyled
      margin={margin}
      outlinecolor={outlinecolor}
      linewidth={linewidth}
      placeholder={placeholder}
      width={width}
      height={height}
      padding={padding}
    />
  );
}

const InputStyled = styled.input`
  margin: ${({ margin }) => `${margin}`};
  padding: ${({ padding }) => `${padding}`};
  width: ${({ width }) => `${width}`};
  height: ${({ height }) => `${height}`};
  border-radius: 12px;
  ${({ outlinecolor, linewidth }) =>
    linewidth
      ? css`
          border: ${linewidth} solid ${outlinecolor};
        `
      : css`
          border: none;
        `}
`;
export default InputBox;
