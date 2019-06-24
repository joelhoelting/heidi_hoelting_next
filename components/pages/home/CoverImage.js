import styled from 'styled-components';

const PictureWrapper = styled.picture`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1500ms ease;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const CoverImage = props => {
  let { active, alt, ext, src } = props;
  ext = ext || 'jpg';

  return (
    <PictureWrapper active={active}>
      <source
        media="(max-width: 992px)"
        srcSet={`${src}_mobile_400.${ext} 400w, ${src}_mobile_600.${ext} 600w, ${src}_mobile_800.${ext} 800w, ${src}_mobile_1000.${ext} 1000w`}
      />
      <source
        media="(min-width: 992px)"
        srcSet={`${src}_400.${ext} 200w, ${src}_600.${ext} 300w, ${src}_800.${ext} 400w, ${src}_1200.${ext} 600w, ${src}_1600.${ext} 800w, ${src}_2000.${ext} 1000w, ${src}_2400.${ext} 1200w, ${src}_2800.${ext} 1400w, ${src}_3200.${ext} 1600w`}
      />
      <img src={`${src}_3200.${ext}`} alt={alt} />
    </PictureWrapper>
  );
};

export default CoverImage;
