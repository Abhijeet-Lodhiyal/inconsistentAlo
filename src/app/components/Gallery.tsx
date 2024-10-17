// src/app/components/Gallery.tsx
'use client';

export default function Gallery() {
    const images = [
      '/images/pc.jpeg',
      '/images/mobile.jpg',
      '/images/mobile.jpg',
    ];
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Gallery Image ${index + 1}`} 
            style={{ width: '30%', margin: '1rem' }}
          />
        ))}
      </div>
    );
  }
  