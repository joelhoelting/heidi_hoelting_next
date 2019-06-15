import styled from 'styled-components';

import Context from '../config/Context';
import ResponsiveImage from '../components/responsive_image';
import { mediaMin } from '../styles/mediaQueries';

import galleryArray from '../data/galleryData';

const GalleryGridWrapper = styled.div`
  display: grid;
  grid-column: 1 / auto;
  grid-template-columns: auto;
  grid-auto-flow: row dense;
  gap: 16px;
  grid-template-columns: 1fr;
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
      height: 60px;
      width: 60px;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      img {
        height: 40px;
        width: 40px;
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
      overlayActive: true
    };
  }

  toggleOverlay(context) {
    const { overlayActive } = this.state;

    context.toggleScrollBar();
    this.setState({ overlayActive: !overlayActive });
  }

  renderGallery(context) {
    return galleryArray.map(item => {
      const { src, size, objectPosition, order } = item;

      return (
        <GridItem key={`gallery-item-${order}`} className={size}>
          <ResponsiveImage
            type="small"
            src={`/static/images/pages/gallery/${src}`}
            objectFit
            objectPosition={objectPosition}
          />
          <div className="picture-overlay" onClick={() => this.toggleOverlay(context)} />
        </GridItem>
      );
    });
  }

  render() {
    const { overlayActive } = this.state;
    return (
      <Context.Consumer>
        {context => (
          <GalleryGridWrapper className="container" active={overlayActive}>
            <div className="gallery-overlay">
              <button alt="Close overlay button" className="close-overlay" onClick={() => this.toggleOverlay(context)}>
                <img src="/static/images/icons/close.svg" />
              </button>
            </div>
            {this.renderGallery(context)}
          </GalleryGridWrapper>
        )}
      </Context.Consumer>
    );
  }
}

export default Gallery;
