import styled from 'styled-components';
import { mediaMin } from '~/styles/mediaQueries';

const IntroDiv = props => {
  return (
    <IntroDivContainer active={props.active}>
      <h1>Heidi  Hölting</h1>
      <h6>Model</h6>
    </IntroDivContainer>
  );
};

export default IntroDiv;

const IntroDivContainer = styled.div`
  position: absolute;
  bottom: 10%;
  text-align: center;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? 1 : 0};
  transition: ${props => props.active ? 'all 1000ms ease 200ms' : 'all 500ms ease'};
  width: 100%;
  h1 {
    margin-bottom: 0;
    font-size: 2.5rem;
    ${mediaMin.desktopSmall`
      font-size: 4rem;
    `}
  }
  h6 {
    margin: 0;
    font-size: 1.8rem;
    ${mediaMin.desktopSmall`
      font-size: 2rem;
    `}
  }
`;