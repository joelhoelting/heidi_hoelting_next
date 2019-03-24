import Layout from '../layouts/primary';
import styled from 'styled-components';

import CoverImage from '../components/CoverImage';
import Bullets from '../components/Bullets';

import homeCarouselData from '../data/homeCarouselData';

class Index extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      initialLoad: false,
      activeImage: 1
    };

    this.imageCount = homeCarouselData.length - 1;
    this.initialImage = React.createRef();
  }

  startImageRotation() {
    this.imageInterval = setInterval(() => this.changeImage(), 7000);
  }

  stopImageRotation(index) {
    this.setState({ activeImage: index});
    clearInterval(this.imageInterval);
  }

  changeImage() {
    let activeImage;
    this.state.activeImage === this.imageCount ? activeImage = 1 : activeImage = this.state.activeImage + 1;
    this.setState({ activeImage });
  }

  // componentDidMount() {
  //   const img = this.initialImage.current;
  //   if (img && img.complete) {
  //     this.handleInitialLoad();
  //   }
  // } 
  
  // handleInitialLoad() {  
  //   if (!this.state.initialLoad) {
  //     this.setState({ initialLoad: true, activeImage: 0});
  //     setTimeout(() => {
  //       this.setState({ activeImage: 1});
  //       this.startImageRotation();
  //     }, 4000);
  //   }
  // }

  generateCarousel() {
    return homeCarouselData.map((image, index) => {
      if (index === 0) {
        return (
          <CoverImage
            key={`cover-image-${index}`} 
            active={this.state.activeImage === index} 
            src={image.src}
            ref={this.initialImage}
            // onLoad={this.handleInitialLoad.bind(this)} 
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

  render () {
    return (
      <Layout>
        {this.generateCarousel()}
        <IntroDiv active={this.state.activeImage === 0}>
          <h1>Heidi Hölting</h1>
          <p>Model</p>
        </IntroDiv>
        <Bullets 
          imageCount={this.imageCount} 
          active={this.state.activeImage !== 0}
          activeImage={this.state.activeImage}
          stopImageRotation={this.stopImageRotation.bind(this)}
        />
      </Layout>
    );
  }
}

export default Index;

const IntroDiv = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  fontSize: 2rem;
  textAlign: center;
  visibility: ${props => props.active ? 'visible' : 'hidden'};
  opacity: ${props => props.active ? 1 : 0};
  transition: ${props => props.active ? 'all 1000ms ease 200ms' : 'all 500ms ease'};
  h1 {
    margin-bottom: 0;
    font-size: 4rem;
  }
  p {
    margin-top: 0;
    text-align: center;
    font-size: 2rem;
  }
`;