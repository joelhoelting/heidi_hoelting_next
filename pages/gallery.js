import styled from 'styled-components';
import ResponsiveImage from '../components/responsive_image';
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

const renderGallery = () => {
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
      </GridItem>
    );
  });
};

const Gallery = () => {
  return <GalleryGridWrapper className="container">{renderGallery()}</GalleryGridWrapper>;
};

export default Gallery;
