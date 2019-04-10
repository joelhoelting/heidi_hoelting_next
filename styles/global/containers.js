import { createGlobalStyle } from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const ContainerStyles = createGlobalStyle`
  .container {
    margin-top: 50px;
    ${mediaMin.tabletLandscape`
      margin-top: 100px;
    `}
  }
`;

export default ContainerStyles;
