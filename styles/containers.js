import { createGlobalStyle } from 'styled-components';
import { mediaMin } from './mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    width: calc(100% - 40px);
    margin: 50px auto 0;
    ${mediaMin.tabletLandscape`
      margin: 80px auto 0;
      width: calc(100% - 80px);
    `}
  }
`;

export default ContainerStyles;
