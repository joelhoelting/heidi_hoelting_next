import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PictureWrapper = styled.picture`
  width: 100%;
  height: 100%;
  ${props => props.objectFit && 'display: flex'};
  img {
    ${props => props.objectFit && 'object-fit: cover'};
    ${props => props.objectPosition && `object-position: ${props.objectPosition}`};
    ${props => props.maxHeight && `max-height: ${props.maxHeight}`};
    width: ${props => (props.width ? props.width : 'auto')};
    ${props => props.centered && 'margin: 0 auto'};
  }
`;

const ResponsiveImage = ({
  imageType,
  alt,
  ext,
  src,
  centered,
  className,
  maxHeight,
  objectFit,
  objectPosition,
  width
}) => {
  ext = ext || 'jpg';

  const srcSetObj = {
    small: {
      default: `${src}_1600.${ext} 1600w`,
      string: `${src}_400.${ext} 400w, ${src}_600.${ext} 600w, ${src}_800.${ext} 800w, ${src}_1200.${ext} 1200w, ${src}_1600.${ext} 1600w`
    },
    large: {
      default: `${src}_3200.${ext} 3200w`,
      string: `${src}_400.${ext} 400w, ${src}_600.${ext} 600w, ${src}_800.${ext} 800w, ${src}_1200.${ext} 1200w, ${src}_1600.${ext} 1600w, ${src}_2000.${ext} 2000w, ${src}_2400.${ext} 2400w, ${src}_2800.${ext} 2800w, ${src}_3200.${ext} 3200w`
    }
  };

  return (
    <PictureWrapper
      centered={centered}
      maxHeight={maxHeight}
      objectFit={objectFit}
      objectPosition={objectPosition}
      width={width}
    >
      <source srcSet={srcSetObj[imageType].string} />
      <img className={className ? className : ''} src={srcSetObj[imageType].default} alt={alt} />
    </PictureWrapper>
  );
};

ResponsiveImage.propTypes = {
  imageType: PropTypes.oneOf(['small', 'large']).isRequired
};

export default ResponsiveImage;
