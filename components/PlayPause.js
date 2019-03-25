import styled from 'styled-components';
import { mediaMax } from '~/styles/mediaQueries';

const PlayPause = props => {
  return (
    <PlayPauseContainer 
      slideShowInitialized={props.slideShowInitialized} 
      onClick={props.toggleSlideShow}
    >
      {props.slideShowActive ? <img src='/static/images/icons/pause_button.png' /> : <img src='/static/images/icons/play_button.png' />}
    </PlayPauseContainer>
  );
};

export default PlayPause;

const PlayPauseContainer = styled.div`
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: all 200ms ease;
  opacity: ${props => props.slideShowInitialized ? 1 : 0};
  visibility: ${props => props.slideShowInitialized ? 'visible' : 'hidden'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(0,0,0,.3);
  }
  ${mediaMax.desktopSmall`
    display: none;
  `}

  img {
    display: block;
  }
`;