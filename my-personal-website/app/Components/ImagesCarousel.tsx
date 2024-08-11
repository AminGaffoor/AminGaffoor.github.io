'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

const images = [
  '/123.jpg',
  '/1234.jpg',
  '/part3.jpg',
  '/part4.jpg',
  '/part5.jpg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.imageWrapper} ${index === currentIndex ? styles.active : ''}`}
        >
          <Image 
            src={src} 
            alt={`Carousel image ${index + 1}`} 
            layout="fill"
            objectFit="contain"
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}