/**
 * Image Manager Utility
 * Handles Cloudinary image transformations and optimizations
 */

const BASE_URL = 'https://res.cloudinary.com/dyaqgdk28/image/upload';

/**
 * Build a Cloudinary image URL with optional transformations
 * @param {string} imagePath - The image path (e.g., '/book_covers/1.jpg')
 * @param {object} options - Optional transformation options
 * @returns {string} Complete Cloudinary URL
 */
export const buildCloudinaryUrl = (imagePath, options = {}) => {
  const {
    width = null,
    height = null,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
  } = options;

  let transformations = [];

  if (width || height) {
    let transform = '';
    if (width) transform += `w_${width}`;
    if (height) transform += (transform ? ',' : '') + `h_${height}`;
    if (crop) transform += `,c_${crop}`;
    transformations.push(transform);
  }

  if (quality) transformations.push(`q_${quality}`);
  if (format) transformations.push(`f_${format}`);

  const transformationString = transformations.length
    ? `/${transformations.join('/')}`
    : '';

  return `${BASE_URL}${transformationString}${imagePath}`;
};

/**
 * Get optimized thumbnail URL for portfolio grids
 */
export const getThumbnailUrl = (imagePath) => {
  return buildCloudinaryUrl(imagePath, {
    width: 400,
    height: 400,
    crop: 'fill',
    quality: '85',
    format: 'auto',
  });
};

/**
 * Get responsive image URL
 */
export const getResponsiveUrl = (imagePath, maxWidth = 800) => {
  return buildCloudinaryUrl(imagePath, {
    width: maxWidth,
    crop: 'scale',
    quality: 'auto',
    format: 'auto',
  });
};

/**
 * Get high-quality full-size image URL
 */
export const getFullQualityUrl = (imagePath) => {
  return buildCloudinaryUrl(imagePath, {
    crop: 'scale',
    quality: '90',
    format: 'auto',
  });
};

export default {
  buildCloudinaryUrl,
  getThumbnailUrl,
  getResponsiveUrl,
  getFullQualityUrl,
};
