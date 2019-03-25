import CoverImage from '~/components/CoverImage';
import Bullets from '~/components/Bullets';
import PlayPause from '~/components/PlayPause';
import IntroDiv from '~/components/IntroDiv';

import homeCarouselData from '~/data/homeCarouselData';

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

  componentWillUnmount() {
    if (this.imageInterval) {
      this.stopImageRotation();
    } else {
      null;
    }
  }

  handleInitialLoad() {  
    if (!this.state.initialLoad) {
      setTimeout(() => {
        this.setState({ initialLoad: true, activeImage: 0});
      }, 300);
      setTimeout(() => {
        this.startImageRotation(1);
      }, 4000);
    }
  }

  toggleSlideShow() {
    if (this.state.slideShowActive) {
      this.stopImageRotation(this.state.activeImage);
    } else {
      this.startImageRotation();
    }
  }

  startImageRotation(activeImage = false) {
    if (!this.state.slideShowActive) {
      let newState;
      if (activeImage) {
        newState = { slideShowActive: true, activeImage };
      } else {
        newState = { slideShowActive: true };
      }
      this.setState(newState);
      this.imageInterval = setInterval(() => this.changeImage(), 4000);
    }
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
        <IntroDiv active={this.state.activeImage === 0} />
        {this.renderBullets()}
        {this.renderPlayPause()}
      </React.Fragment>
    );
  }
}

export default Index;

