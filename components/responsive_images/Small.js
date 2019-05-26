import React from 'react';

const SmallImage = ({ alt, ext, src, objectFit, objectPosition }) => {
  ext = ext || 'jpg';

  const styles = {
    objectFit: {
      picture: {
        width: '100%',
        height: '100%',
        display: 'flex'
      },
      img: {
        width: '100%',
        objectFit: 'cover',
        objectPosition: objectPosition || null,
        height: 'auto'
      }
    }
  };

  return (
    <picture style={objectFit && styles.objectFit.picture}>
      <source
        srcSet={`${src}_400.${ext} 400w, ${src}_600.${ext} 600w, ${src}_800.${ext} 800w, ${src}_1200.${ext} 1200w, ${src}_1600.${ext} 1600w`}
      />
      <img style={objectFit && styles.objectFit.img} src={`${src}_1600.${ext} 1600w`} alt={alt} />
    </picture>
  );
};

export default SmallImage;
