import styled from 'styled-components';
import { mediaMin } from '../../../styles/mediaQueries';

const PlayPauseContainer = styled.div`
  display: none;
  ${mediaMin.tablet`
    display: flex;
    border-radius: 50%;
    cursor: pointer;
    height: 50px;
    width: 50px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    transition: all 200ms ease;
    opacity: ${props => (props.slideShowInitialized ? 1 : 0)};
    visibility: ${props => (props.slideShowInitialized ? 'visible' : 'hidden')};
    align-items: center;
    justify-content: center;
    &:hover {
      background: rgba(0, 0, 0, 0.3);
    }
  `}

  img {
    display: block;
  }
`;

const PlayPause = ({ slideShowActive, slideShowInitialized, toggleSlideShow }) => {
  return (
    <PlayPauseContainer slideShowInitialized={slideShowInitialized} onClick={toggleSlideShow}>
      {slideShowActive ? (
        <img alt="Pause button for home screen slideshow" src="/static/images/icons/pause_button.png" />
      ) : (
        <img alt="Play button for home screen slideshow" src="/static/images/icons/play_button.png" />
      )}
    </PlayPauseContainer>
  );
};

export default PlayPause;
