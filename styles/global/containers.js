import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '../mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    margin-top: 50px;
    ${mediaMin.tabletLandscape`
      margin-top: 100px;
    `}
  }
`;

export default ContainerStyles;
