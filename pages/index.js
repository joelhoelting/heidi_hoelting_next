import styled from 'styled-components';

import CoverImage from '~/components/CoverImage';
import Bullets from '~/components/Bullets';
import PlayPause from '~/components/PlayPause';

import homeCarouselData from '~/data/homeCarouselData';

import { mediaMin } from '~/styles/mediaQueries';

class Index extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      initialLoad: false
    };

    this.imageCount = homeCarouselData.length - 1;
    this.initialImage = React.createRef();
  }

  componentDidMount() {
    const img = this.initialImage.current;
    if (img && img.complete) {
      this.handleInitialLoad();
    }
  } 


  handleInitialLoad() {  
    if (!this.state.initialLoad) {
      this.setState({ initialLoad: true, activeImage: 0});
      setTimeout(() => {
        this.setState({ activeImage: 1});
        this.startImageRotation();
      }, 4000);
    }
  }

  toggleSlideShow() {
    if (this.state.slideShowActive) {
      this.stopImageRotation(this.state.activeImage);
      this.setState({ slideShowActive: false });
    } else {
      this.startImageRotation();
      this.setState({ slideShowActive: true });
    }
  }

  startImageRotation() {
    this.setState({ slideShowActive: true });
    this.imageInterval = setInterval(() => this.changeImage(), 4000);
  }

  stopImageRotation(index) {
    this.setState({ activeImage: index, slideShowActive: false});
    clearInterval(this.imageInterval);
  }

  changeImage() {
    let activeImage;
    this.state.activeImage === this.imageCount ? activeImage = 1 : activeImage = this.state.activeImage + 1;
    this.setState({ activeImage });
  }

  generateCarousel() {
    return homeCarouselData.map((image, index) => {
      if (index === 0) {
        return (
          <CoverImage
            key={`cover-image-${index}`} 
            active={this.state.activeImage === index} 
            src={image.src}
            ref={this.initialImage}
            onLoad={this.handleInitialLoad.bind(this)} 
          />
        );
      } else {
        return (
          <CoverImage 
            key={`cover-image-${index}`} 
            active={this.state.activeImage === index}
            src={image.src}
          />
        );
      }
    });
  }

  renderBullets() {
    if (this.state.initialLoad) {
      return (
        <Bullets 
          imageCount={this.imageCount} 
          active={this.state.activeImage !== 0}
          activeImage={this.state.activeImage}
          stopImageRotation={this.stopImageRotation.bind(this)}
        />
      );
    }
  }

  renderPlayPause() {
    if (this.state.initialLoad) {
      return (
        <PlayPause
          slideShowActive={this.state.slideShowActive}
          slideShowInitialized={this.state.activeImage !== 0}
          toggleSlideShow={() => this.toggleSlideShow() } 
        />
      );
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.generateCarousel()}
        <IntroDiv active={this.state.activeImage === 0}>
          <h1>Heidi  Hölting</h1>
          <h6>Model</h6>
        </IntroDiv>
        {this.renderBullets()}
        {this.renderPlayPause()}
      </React.Fragment>
    );
  }
}

export default Index;

const IntroDiv = styled.div`
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