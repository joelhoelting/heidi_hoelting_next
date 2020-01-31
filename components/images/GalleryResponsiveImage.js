import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaMin } from '../../styles/mediaQueries';

const PictureWrapper = styled.picture`
  width: 100%;
  height: 100%;
  ${props => props.objectFit && 'display: flex'};
  img {
    ${props => props.objectFit && 'object-fit: cover'};
    ${props => `object-position: ${props.objectPosition || '50% 50%'}`};
    ${props => props.maxHeight && `max-height: ${props.maxHeight}`};
    width: ${props => (props.width ? props.width : 'auto')};
    ${props => props.centered && 'margin: 0 auto'};
    &.carousel-image {
      max-height: 700px;
      ${mediaMin.desktopLarge`
        max-height: 900px;
      `}
    }
  }
`;

const ResponsiveImage = props => {
  let {
    imageType,
    alt,
    centered,
    className,
    maxHeight,
    objectFit,
    objectPosition,
    width,
    sizes: {
      width_400,
      width_600,
      width_800,
      width_1000,
      width_1200,
      width_1400,
      width_1600,
      width_2000,
      width_2400,
      width_2800,
      width_3200
    }
  } = props;

  const srcSetObj = {
    small: {
      default: width_1600,
      string: `${width_400} 400w, ${width_600} 600w, ${width_800} 800w, ${width_1000} 1000w, ${width_1200} 1200w, ${width_1600} 1600w`
    },
    large: {
      default: width_3200,
      string: `${width_400} 400w, ${width_600} 600w, ${width_800} 800w, ${width_1000} 1000w, ${width_1200} 1200w, ${width_1400} 1400w, ${width_1600} 1600w, ${width_2000} 2000w, ${width_2400} 2400w, ${width_2800} 2800w, ${width_3200} 3200w`
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
