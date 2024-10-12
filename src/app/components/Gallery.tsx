// src/app/components/Gallery.tsx
export default function Gallery() {
    const images = [
      '/images/photo1.jpg',
      '/images/photo2.jpg',
      '/images/photo3.jpg',
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
  