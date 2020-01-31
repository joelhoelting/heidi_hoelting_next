const cmsUrl = 'https://cms.heidihoelting.com/';
const cdnUrl = 'https://images.heidihoelting.com/';

const replaceCmsUrl = url => {
  const sanitizedUrl = url.replace(cmsUrl, cdnUrl);
  return sanitizedUrl;
};

const prependCmsUrlToFilename = filename => {
  return cdnUrl + 'wp-content/uploads/' + filename;
};

const appendStringToFilename = (filename, str) => {
  return '/static/images/pages/gallery/' + filename + str;
};

const parseGalleryImages = (galleryImages, fetchedFromCMS = false) => {
  let parsedGalleryImages = galleryImages.map(image => {
    let sizeObj;

    if (fetchedFromCMS) {
      const {
        size,
        image_type,
        object_position,
        image: {
          alt,
          filename,
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
            width_2800
          }
        }
      } = image.acf;

      if (image_type === 'large') {
        sizeObj = {
          width_400: replaceCmsUrl(width_400),
          width_600: replaceCmsUrl(width_600),
          width_800: replaceCmsUrl(width_800),
          width_1000: replaceCmsUrl(width_1000),
          width_1200: replaceCmsUrl(width_1200),
          width_1400: replaceCmsUrl(width_1400),
          width_1600: replaceCmsUrl(width_1600),
          width_2000: replaceCmsUrl(width_2000),
          width_2400: replaceCmsUrl(width_2400),
          width_2800: replaceCmsUrl(width_2800),
          width_3200: prependCmsUrlToFilename(filename)
        };
      } else if (image_type === 'small') {
        sizeObj = {
          width_400: replaceCmsUrl(width_400),
          width_600: replaceCmsUrl(width_600),
          width_800: replaceCmsUrl(width_800),
          width_1000: replaceCmsUrl(width_1000),
          width_1200: replaceCmsUrl(width_1200),
          width_1400: replaceCmsUrl(width_1400),
          width_1600: prependCmsUrlToFilename(filename)
        };
      }

      return {
        alt,
        imageType: image_type,
        objectPosition: object_position || '50% 50%',
        size,
        sizes: sizeObj
      };
    } else {
      const { alt, src, size, imageType, objectPosition } = image;

      if (imageType === 'large') {
        sizeObj = {
          width_400: appendStringToFilename(src, '_400.jpg'),
          width_600: appendStringToFilename(src, '_600.jpg'),
          width_800: appendStringToFilename(src, '_800.jpg'),
          width_1000: appendStringToFilename(src, '_1000.jpg'),
          width_1200: appendStringToFilename(src, '_1200.jpg'),
          width_1400: appendStringToFilename(src, '_1400.jpg'),
          width_1600: appendStringToFilename(src, '_1600.jpg'),
          width_2000: appendStringToFilename(src, '_2000.jpg'),
          width_2400: appendStringToFilename(src, '_2400.jpg'),
          width_2800: appendStringToFilename(src, '_2800.jpg'),
          width_3200: appendStringToFilename(src, '_3200.jpg')
        };
      } else if (imageType === 'small') {
        sizeObj = {
          width_400: appendStringToFilename(src, '_400.jpg'),
          width_600: appendStringToFilename(src, '_600.jpg'),
          width_800: appendStringToFilename(src, '_800.jpg'),
          width_1000: appendStringToFilename(src, '_1000.jpg'),
          width_1200: appendStringToFilename(src, '_1200.jpg'),
          width_1400: appendStringToFilename(src, '_1400.jpg'),
          width_1600: appendStringToFilename(src, '_1600.jpg')
        };
      }

      return {
        alt,
        imageType,
        objectPosition: objectPosition || '50% 50%',
        size,
        sizes: sizeObj
      };
    }
  });

  return parsedGalleryImages;
};

export default parseGalleryImages;
