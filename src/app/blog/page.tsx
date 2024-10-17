// src/app/pages/blog.tsx
import BlogPost from '../components/BlogPost';
import Navbar from '../components/Navbar';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold my-8">Blog</h1>
      <div className="max-w-3xl mx-auto">
        <BlogPost 
          title="My First Blog Post"
          image="/images/pc.jpeg"
          content="This is a sample blog post with some text and images."
        />
        <BlogPost 
          title="Another Interesting Post"
          image="/images/mobile.jpg"
          content="Here is another post with some insightful content."
        />
      </div>
    </div>
  );
}
