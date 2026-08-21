/**
 * Simple Cloudinary URL Generator
 * Generates image URLs based on folder name and image index
 * 
 * Usage:
 * generateCloudinaryUrl('creatives', 1) 
 * => 'https://res.cloudinary.com/dyaqgdk28/image/upload/creatives/1.jpg'
 * 
 * generateCloudinaryUrl('logos', 2, { width: 400, quality: 80 })
 * => 'https://res.cloudinary.com/dyaqgdk28/image/upload/w_400,q_80/logos/2.jpg'
 */

const CLOUD_NAME = 'dyagqdk28';
const BASE_URL = 'https://res.cloudinary.com';

/**
 * Generate Cloudinary image URL
 * @param {string} folder - Folder name (e.g., 'creatives', 'logos')
 * @param {number} index - Image index (1-based, e.g., 1, 2, 3)
 * @param {object} options - Optional transformations { width, height, quality, format }
 * @returns {string} Full Cloudinary image URL
 */
export const generateCloudinaryUrl = (folder, index, options = {}) => {
  let transformations = '';

  if (Object.keys(options).length > 0) {
    const transforms = [];
    
    if (options.width) transforms.push(`w_${options.width}`);
    if (options.height) transforms.push(`h_${options.height}`);
    if (options.quality) transforms.push(`q_${options.quality}`);
    if (options.format) transforms.push(`f_${options.format}`);
    if (options.crop) transforms.push(`c_${options.crop}`);

    if (transforms.length > 0) {
      transformations = transforms.join(',') + '/';
    }
  }

  return `${BASE_URL}/${CLOUD_NAME}/image/upload/${transformations}${folder}/${index}.jpg`;
};

/**
 * Generate array of image URLs for a folder
 * @param {string} folder - Folder name
 * @param {number} count - Number of images in folder
 * @param {object} options - Optional transformations
 * @returns {array} Array of image URLs
 */
export const generateFolderImages = (folder, count, options = {}) => {
  return Array.from({ length: count }, (_, i) => 
    generateCloudinaryUrl(folder, i + 1, options)
  );
};

export default { generateCloudinaryUrl, generateFolderImages };
