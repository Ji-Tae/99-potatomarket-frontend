import React from 'react';
import { styled, css } from 'styled-components';

function InputBox(props) {
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
