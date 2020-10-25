import styled from 'styled-components';

import Context from '../config/Context';
import ResponsiveSlider from '../components/slick/ResponsiveSlider';
import ResponsiveImage from '../components/images/GalleryResponsiveImage';
import { mediaMin } from '../styles/mediaQueries';

import parseGalleryImages from '../helpers/parseGalleryImages';
import localGalleryArray from '../data/galleryData';

const GalleryGridWrapper = styled.div`
  padding-bottom: 50px;
  ${mediaMin.phoneXL`
    display: grid;
    grid-column: 1 / auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row dense;
    gap: 16px;
  `}
  ${mediaMin.tablet`
    grid-template-columns: 1fr 1fr 1fr;
  `}
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
      right: 12px;
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
  margin-bottom: 16px;
  opacity: 0;

  &.reveal-0 {
    opacity: 1;
    transition: 500ms ease 200ms;
  }
  &.reveal-1 {
    opacity: 1;
    transition: 500ms ease 400ms;
  }
  &.reveal-2 {
    opacity: 1;
    transition: 500ms ease 600ms;
  }

  ${mediaMin.phoneXL`
    margin-bottom: initial;
  `}
  &.tall {
    ${mediaMin.phoneXL`
      padding-top: 200%;
      grid-row-end: span 2;
      grid-column-end: span 1;
    `}
  }
  &.wide {
    ${mediaMin.phoneXL`
      padding-top: 50%;
      grid-row-end: span 1;
      grid-column-end: span 2;
    `}
  }
  &.square {
    ${mediaMin.phoneXL`
      padding-top: 100%;
      grid-row-end: span 2;
      grid-column-end: span 2;
    `}
  }
  &.square-small {
    ${mediaMin.phoneXL`
      padding-top: 100%;
      grid-row-end: span 1;
      grid-column-end: span 1;
    `}
  }
  .picture-overlay {
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: none;
    cursor: pointer;
    transition: background 100ms ease;
    ${mediaMin.tabletLandscape`
      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }
    `}
  }
  picture {
    max-width: 100%;
    ${mediaMin.phoneXL`
      position: absolute;
      top: 0;
      left: 0;
    `}
    img {
      border-radius: 5px;
    }
  }
`;

const LegalDisclaimer = styled.p`
  font-size: 10px;
  text-align: center;
  padding-bottom: 40px;
  ${mediaMin.phone`
    font-size: 12px;
  `}
  ${mediaMin.tablet`
    font-size: 16px;
  `}
`;

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carousel: {
        active: false,
        currentIndex: undefined
      },
      galleryArray: [],
      mounted: false
    };
  }

  componentDidMount() {
    fetch('https://brokencmsurl.com/wp-json/wp/v2/gallery_images/?per_page=100')
      .then(res => res.json())
      .then(cmsData => {
        const galleryArray = parseGalleryImages(cmsData, true);

        this.setState({ galleryArray });

        setTimeout(() => {
          this.setState({ mounted: true });
        }, 500);
      })
      .catch(() => {
        const galleryArray = parseGalleryImages(localGalleryArray);
        this.setState({ galleryArray });

        setTimeout(() => {
          this.setState({ mounted: true });
        }, 500);
      });
  }

  toggleOverlay(event = undefined, context, index = undefined) {
    let carouselImageClicked = event.target.classList.contains('carousel-image');
    let carouselArrowClicked = event.target.classList.contains('slick-arrow');

    if (carouselImageClicked || carouselArrowClicked) {
      return;
    }

    const { carousel } = this.state;
    const { active } = carousel;
    const newActiveState = !active;

    newActiveState ? context.lockScrollBar(true) : context.lockScrollBar(false);

    const newState = {
      active: newActiveState,
      currentIndex: index
    };

    this.setState({ carousel: newState });
  }

  renderGallery(context, galleryArray) {
    const { mounted } = this.state;

    return galleryArray.map((item, idx) => {
      const { alt, imageType, objectPosition, size, sizes } = item;

      const animationClass = `reveal-${idx % 3}`;

      return (
        // eslint-disable-next-line
        <GridItem key={`gallery-item-${idx}`} className={`${size} ${mounted ? animationClass : ''}`} mounted={mounted}>
          <ResponsiveImage
            alt={alt}
            imageType={imageType}
            sizes={sizes}
            objectFit
            objectPosition={objectPosition}
            width="100%"
          />
          <div className="picture-overlay" aria-hidden="true" onClick={e => this.toggleOverlay(e, context, idx)} />
        </GridItem>
      );
    });
  }

  render() {
    const { carousel, galleryArray, mounted } = this.state;
    const { active, currentIndex } = carousel;

    return (
      <Context.Consumer>
        {context => (
          <React.Fragment>
            <GalleryGridWrapper className="container" active={active}>
              <div className="gallery-overlay" aria-hidden="true" onClick={e => this.toggleOverlay(e, context)}>
                <ResponsiveSlider imgArray={galleryArray} currentIndex={currentIndex} />
                <div alt="Close overlay button" aria-hidden="true" className="close-overlay">
                  <img aria-hidden="true" alt="Close overlay icon" src="/static/images/icons/close.svg" />
                </div>
              </div>
              {this.renderGallery(context, galleryArray)}
            </GalleryGridWrapper>
            {mounted && <LegalDisclaimer>All images © 2019 Heidi Hölting. All Rights Reserved.</LegalDisclaimer>}
          </React.Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default Gallery;
