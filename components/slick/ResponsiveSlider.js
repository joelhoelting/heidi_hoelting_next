import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { mediaMin } from '../../styles/mediaQueries';
import ResponsiveImage from '../images/GalleryResponsiveImage';

const SliderArrowWrapper = styled.div`
  z-index: 10;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: none;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  img {
    height: 20px;
    width: 20px;
  }
`;

const SliderArrow = props => {
  const { className, onClick, src } = props;
  return (
    <SliderArrowWrapper aria-hidden="true" className={className} onClick={onClick}>
      <img className={`${className}-image`} alt="Gallery next arrow" src={src} />
    </SliderArrowWrapper>
  );
};

const SliderWrapper = styled.div`
  height: 100%;
  .gallery-slider {
    width: calc(100% + 1px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${mediaMin.tablet`
      width: 90%;
    `}
    .slick-track {
      display: flex;
      align-items: center;
    }
  }
  .slick-prev {
    left: 0;
    ${mediaMin.tablet`
      left: -12px;
    `}
  }
  .slick-next {
    right: 0;
    ${mediaMin.tablet`
      right: -12px;
    `}
  }
  .slick-prev::before {
    content: none;
  }
  .slick-next::before {
    content: none;
  }
`;

class ResponsiveSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: undefined
    };
  }

  createSlides() {
    const { imgArray } = this.props;
    return imgArray.map(img => {
      const { alt, imageType, sizes } = img;
      return (
        <ResponsiveImage
          alt={alt}
          className="carousel-image"
          centered
          key={`carousel-image-${img.order}`}
          imageType={imageType}
          sizes={sizes}
        />
      );
    });
  }

  render() {
    const settings = {
      dots: false,
      easing: 'ease-in-out',
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'gallery-slider',
      prevArrow: <SliderArrow src="/static/images/icons/left_arrow.svg" />,
      nextArrow: <SliderArrow src="/static/images/icons/right_arrow.svg" />,
      afterChange: index => {
        this.setState({
          currentIndex: index
        });
      }
    };

    /* eslint-disable */

    // Scroll to clicked slide
    if (this.props.currentIndex !== this.state.currentIndex) {
      this.slider.slickGoTo(this.props.currentIndex, true);

      this.setState({
        currentIndex: this.props.currentIndex
      });
    }

    /* eslint-enable */

    return (
      <SliderWrapper>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {this.createSlides()}
        </Slider>
      </SliderWrapper>
    );
  }
}

export default ResponsiveSlider;
