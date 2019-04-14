import CoverImage from '../components/CoverImage';
import Bullets from '../components/Bullets';
import PlayPause from '../components/PlayPause';
import IntroDiv from '../components/IntroDiv';

import homeCarouselData from '../data/homeCarouselData';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoad: false
    };

    this.imageCount = homeCarouselData.length - 1;
  }

  componentDidMount() {
    this.handleInitialLoad();
  }

  componentWillUnmount() {
    if (this.imageInterval) {
      this.stopImageRotation();
    }
    if (this.timerInitialLoad) {
      clearTimeout(this.timerInitialLoad);
    }
    if (this.timerStartImageRotation) {
      clearTimeout(this.timerStartImageRotation);
    }
  }

  handleInitialLoad() {
    const { initialLoad } = this.state;
    if (!initialLoad) {
      this.timerInitialLoad = setTimeout(() => {
        this.setState({ initialLoad: true, activeImage: 0 });
      }, 300);
      this.timerStartImageRotation = setTimeout(() => {
        this.startImageRotation(1);
      }, 4000);
    }
  }

  toggleSlideShow() {
    const { activeImage, slideShowActive } = this.state;
    if (slideShowActive) {
      this.stopImageRotation(activeImage);
    } else {
      this.startImageRotation();
    }
  }

  startImageRotation(activeImage = false) {
    const { slideShowActive } = this.state;
    if (!slideShowActive) {
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
    this.setState({ activeImage: index, slideShowActive: false });
    clearInterval(this.imageInterval);
  }

  changeImage() {
    const currentImage = this.state.activeImage;
    const activeImage = currentImage === this.imageCount ? 1 : currentImage + 1;
    this.setState({ activeImage });
  }

  generateCarousel() {
    return homeCarouselData.map((image, index) => {
      const { activeImage } = this.state;
      if (image.initialImage) {
        return <CoverImage key={`cover-image-${image.id}`} active={activeImage === index} src={image.src} />;
      }
      return <CoverImage key={`cover-image-${image.id}`} active={activeImage === index} src={image.src} />;
    });
  }

  renderBullets() {
    const { activeImage, initialLoad } = this.state;
    if (initialLoad) {
      return (
        <Bullets
          imageCount={this.imageCount}
          active={activeImage !== 0}
          activeImage={activeImage}
          stopImageRotation={index => this.stopImageRotation(index)}
        />
      );
    }
    return null;
  }

  renderPlayPause() {
    const { activeImage, initialLoad, slideShowActive } = this.state;
    if (initialLoad) {
      return (
        <PlayPause
          slideShowActive={slideShowActive}
          slideShowInitialized={activeImage !== 0}
          toggleSlideShow={() => this.toggleSlideShow()}
        />
      );
    }
    return null;
  }

  render() {
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
