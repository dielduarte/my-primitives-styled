import { createStyled } from '@stitches/react';


export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    space: {
      $xsmall: '1.5rem',
      $small: `${1.5 * 2}rem`, 
      $medium: `${1.5 * 3}rem`, 
      $large: `${1.5 * 4}rem`, 
      $xlarge: `${1.5 * 5}rem`
    }
  },
  breakpoints: {},
  utils: {},
});