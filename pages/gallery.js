import styled, { keyframes } from 'styled-components';

const galleryMove = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -2125px;
  }
`;

const GalleryWrapper = styled.div`
  height: 100%;
  margin-bottom: 80px;
  display: flex;
  img {
    height: 100%;
    margin-right: 5px;
    &.first {
      animation: ${galleryMove} 60s linear infinite;
    }
  }
`;

const Gallery = () => {
  return (
    <GalleryWrapper>
      <img className="first" src="/static/images/pages/gallery/heidi_maestro_vertical.jpg" alt="" />
      <img src="/static/images/pages/gallery/heidi_maestro_horizontal.jpg" alt="" />
      <img src="/static/images/pages/gallery/heidi_maestro_vertical.jpg" alt="" />
      <img src="/static/images/pages/gallery/heidi_maestro_horizontal.jpg" alt="" />
      <img src="/static/images/pages/gallery/heidi_maestro_vertical.jpg" alt="" />
    </GalleryWrapper>
  );
};

export default Gallery;
