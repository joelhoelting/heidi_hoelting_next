import styled from 'styled-components';

import Context from '../config/Context';
import ResponsiveSlider from '../components/slick/ResponsiveSlider';
import ResponsiveImage from '../components/images/ResponsiveImage';
import { mediaMin } from '../styles/mediaQueries';

import galleryArray from '../data/galleryData';

const GalleryGridWrapper = styled.div`
  display: grid;
  grid-column: 1 / auto;
  grid-template-columns: auto;
  grid-auto-flow: row dense;
  gap: 16px;
  grid-template-columns: 1fr;
  padding-bottom: 100px;
  ${mediaMin.tablet`
    grid-template-columns: 1fr 1fr;
  `}\
  ${mediaMin.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
  ${mediaMin.desktopLarge`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  `}
  .gallery-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0,0,0,.9);
    transition: all 200ms ease;
    visibility: ${props => (props.active ? 'visible' : 'hidden')};
    opacity: ${props => (props.active ? 1 : 0)};
    .close-overlay {
      position: absolute;
      top: 20px;
      right: 20px;
      height: 40px;
      width: 40px;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      img {
        height: 25px;
        width: 25px;
      }
    }
  }
`;

const GridItem = styled.div`
  position: relative;
  &.tall {
    padding-top: 200%;
    grid-row-end: span 2;
    grid-column-end: span 1;
  }
  &.wide {
    padding-top: 50%;
    grid-row-end: span 1;
    grid-column-end: span 2;
  }
  &.square {
    padding-top: 100%;
    grid-row-end: span 2;
    grid-column-end: span 2;
  }
  &.square-small {
    padding-top: 100%;
    grid-row-end: span 1;
    grid-column-end: span 1;
  }
  .picture-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: none;
    cursor: pointer;
    transition: background 100ms ease;
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
  picture {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carousel: {
        active: false,
        currentIndex: undefined
      }
    };
  }

  toggleOverlay(context, index = undefined) {
    const { carousel } = this.state;
    const { active } = carousel;

    context.toggleScrollBar();

    const newState = {
      active: !active,
      currentIndex: index
    };

    this.setState({ carousel: newState });
  }

  renderGallery(context) {
    return galleryArray.map((item, idx) => {
      const { src, size, objectPosition, order } = item;

      return (
        <GridItem key={`gallery-item-${order}`} className={size}>
          <ResponsiveImage
            imageType="small"
            src={`/static/images/pages/gallery/${src}`}
            objectFit
            objectPosition={objectPosition}
            width="100%"
          />
          <div className="picture-overlay" aria-hidden="true" onClick={() => this.toggleOverlay(context, idx)} />
        </GridItem>
      );
    });
  }

  render() {
    const { carousel } = this.state;
    const { active, currentIndex } = carousel;
    return (
      <Context.Consumer>
        {context => (
          <GalleryGridWrapper className="container" active={active}>
            <div className="gallery-overlay">
              <ResponsiveSlider imgArray={galleryArray} currentIndex={currentIndex} />
              <div
                alt="Close overlay button"
                aria-hidden="true"
                className="close-overlay"
                onClick={() => this.toggleOverlay(context)}
              >
                <img aria-hidden="true" alt="Close overlay icon" src="/static/images/icons/close.svg" />
              </div>
            </div>
            {this.renderGallery(context)}
          </GalleryGridWrapper>
        )}
      </Context.Consumer>
    );
  }
}

export default Gallery;
