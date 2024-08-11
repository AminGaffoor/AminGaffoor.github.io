import Image from 'next/image';
import ImageCarousel from './Components/ImagesCarousel';

export default function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginTop: '1rem' }}>Amin Gaffoor</h1>
        <h2 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>Computer Science Student & Web Developer</h2>
      </div>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', marginTop: '2rem' }}>
        Welcome to my world of innovative tech solutions and leadership!
      </p>
      
      {/* Add the ImageCarousel component here */}
      <ImageCarousel />
    </div>
  );
}