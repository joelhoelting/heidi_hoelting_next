import Layout from '../layouts/primary';
import styled from 'styled-components';

import Bullets from '../components/bullets';

class Index extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      initialLoad: false,
      activeImage: 0
    };

    this.imageCount = 4;
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

  componentDidMount() {
    const img = this.initialImage.current;
    if (img && img.complete) {
      this.handleInitialLoad();
    }
  } 
  
  handleInitialLoad() {  
    if (!this.state.initialLoad) {
      setTimeout(() => {
        this.setState({ initialLoad: true, activeImage: 1});
        this.startImageRotation();
      }, 3000);
    }
  }

  render () {    
    return (
      <Layout>
        <CoverImage 
          active={this.state.activeImage === 4}
          src='/static/images/pages/home/home_background_4_2400.jpg' 
        />
        <CoverImage 
          active={this.state.activeImage === 3}
          src='/static/images/pages/home/home_background_3_2400.jpg' 
        />
        <CoverImage 
          active={this.state.activeImage === 2}
          src='/static/images/pages/home/home_background_2_2400.jpg' 
        />
        <CoverImage 
          active={this.state.activeImage === 1}
          src='/static/images/pages/home/home_background_1_2400.jpg' 
        />
        <CoverImage 
          active={this.state.activeImage === 0} 
          src='/static/images/pages/home/home_background_0_initial_2400.jpg'
          ref={this.initialImage}
          onLoad={this.handleInitialLoad.bind(this)} 
        />
        {/* <div>
          <h1 style={{ marginBottom: 0 }}>Heidi Hölting</h1>
          <p style={{ marginTop: 0 }}>Model</p>
        </div> */}
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

const CoverImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 500ms ease;
  opacity: ${props => props.active ? 1 : 0};
`;

