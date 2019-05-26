import styled from 'styled-components';
import { SmallImage, LargeImage } from '../components/responsive_images/_module';
import galleryArray from '../data/galleryData';

const GalleryGridWrapper = styled.div`
  display: grid;
  grid-column: 1 / auto;
  grid-template-columns: auto;
  grid-auto-flow: row dense;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
  picture {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
  }
`;

const components = {
  small: SmallImage,
  large: LargeImage
};

const renderGallery = () => {
  return galleryArray.map(item => {
    const { src, size, imageType, objectPosition, order } = item;

    const ImageComponent = components[imageType];

    return (
      <GridItem key={`gallery-item-${order}`} className={size}>
        <ImageComponent src={`/static/images/pages/gallery/${src}`} objectFit objectPosition={objectPosition} />
      </GridItem>
    );
  });
};

const Gallery = () => {
  return <GalleryGridWrapper className="container">{renderGallery()}</GalleryGridWrapper>;
};

export default Gallery;
