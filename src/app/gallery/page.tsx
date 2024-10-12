// src/app/pages/gallery.tsx
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';

export default function GalleryPage() {
  return (
    <div>
      <Navbar />
      <h1>Gallery</h1>
      <Gallery />
    </div>
  );
}
