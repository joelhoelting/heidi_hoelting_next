import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '../mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    margin-top: 50px;
    ${mediaMin.tabletLandscape`
      margin-top: 100px;
    `}
  }
  .contact-container {
    padding-top: 80px;
    ${mediaMin.tabletLandscape`
      padding-top: 0;
    `}
  }
`;

export default ContainerStyles;
