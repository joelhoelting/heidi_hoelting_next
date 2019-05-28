import { createGlobalStyle } from 'styled-components';

const AnimationStyles = createGlobalStyle`
  .hide {
    opacity: 0;
    transition: opacity 200ms ease;
  }
`;

export default AnimationStyles;