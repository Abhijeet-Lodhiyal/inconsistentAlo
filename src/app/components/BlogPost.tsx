// src/app/components/BlogPost.tsx
interface BlogPostProps {
    title: string;
    image: string;
    content: string;
  }
  
  export default function BlogPost({ title, image, content }: BlogPostProps) {
    return (
      <article>
        <h2>{title}</h2>
        <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
        <p>{content}</p>
      </article>
    );
  }
  