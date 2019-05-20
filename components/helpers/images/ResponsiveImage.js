import React from 'react';

const ResponsiveImage = ({ alt, src }) => {
  return (
    <picture>
      <source
        srcSet={`${src}_400.jpg 400w, ${src}_600.jpg 600w, ${src}_800.jpg 800w, ${src}_1200.jpg 1200w, ${src}_1600.jpg 1600w, ${src}_20000.jpg 20000w, ${src}_2400.jpg 2400w`}
      />
      <img src={`${src}_2400.jpg 2400w`} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
