import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import ResponsiveImage from '../images/ResponsiveImage';

const SliderWrapper = styled.div`
  height: 100%;
  .gallery-slider {
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
      const { imageType, src } = img;
      return (
        <ResponsiveImage
          centered
          maxHeight="800px"
          key={`carousel-image-${img.order}`}
          imageType={imageType}
          src={`/static/images/pages/gallery/${src}`}
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
      afterChange: index => {
        this.setState({
          currentIndex: index
        });
      }
    };

    // Scroll to clicked slide
    if (this.props.currentIndex !== this.state.currentIndex) {
      this.slider.slickGoTo(this.props.currentIndex, true);

      this.setState({
        currentIndex: this.props.currentIndex
      });
    }

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
