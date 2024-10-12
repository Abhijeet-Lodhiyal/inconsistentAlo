// src/app/pages/blog.tsx
import BlogPost from '../components/BlogPost';
import Navbar from '../components/Navbar';

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <h1>Blog</h1>
      <BlogPost 
        title="My First Blog Post"
        image="/images/blog-image.jpg"
        content="This is a sample blog post with some text and images."
      />
      <BlogPost 
        title="Another Interesting Post"
        image="/images/blog-image2.jpg"
        content="Here is another post with some insightful content."
      />
    </div>
  );
}
