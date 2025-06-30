import { useCallback, useEffect, useState } from 'react';

interface ImageItem {
  src: string;
  fallback: string;
}

export const useImagePreloader = (images: ImageItem[]) => {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageError = useCallback((index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  }, []);

  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  }, []);

  const preloadImages = useCallback(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(index);
      img.onerror = () => handleImageError(index);
    });
  }, [images, handleImageLoad, handleImageError]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const getImageSrc = useCallback((index: number) => {
    return imageErrors.has(index) ? images[index]?.fallback : images[index]?.src;
  }, [imageErrors, images]);

  return { imageErrors, loadedImages, getImageSrc };
};