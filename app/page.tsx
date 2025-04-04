import Image from 'next/image';
import { fetchBlogPosts } from '../lib/api';
import Link from 'next/link';

interface Post {
  id: string;
  slug: string;
  Title: string;
  Content?: string;
  createdAt: string;
  Image?: {
    url: string;
  };
}

export default async function Home() {
  const posts: Post[] = await fetchBlogPosts();

  const sortedPosts = posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="container">
      <div className="intro">
        <div className="intro-text">
          <h2>Hey, I'm Lino ✌️</h2>
          <p>Junior System Engineer mit technischer Begeisterung für Intune, PowerShell, Azure und Microsoft 365</p>
          <div className="social-icons">
            <a href="https://instagram.com/surmatik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@surmatik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/lino-bertschinger/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/surmatik" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="intro-image">
          <Image src="/lino.png" alt="Profilbild von Lino" width={200} height={200} className="profile-image" />
        </div>
      </div>

      <h2 className="home-title">
        My <span className="highlighted">Blog</span>
      </h2>

      <main className="blog-posts">
        {sortedPosts.map((post) => (
          <div key={post.id} className="post">
            <Link href={`/${post.slug}`}>
              {post.Image && post.Image.url && (
                <Image
                  src={`https://strapi.prod-strapi-fra-01.surmatik.ch${post.Image.url}`}
                  alt={post.Title}
                  width={300}
                  height={200}
                  className="post-image"
                />
              )}
            </Link>
            <Link href={`/${post.slug}`}>
              <h3 className="post-title">{post.Title || 'Untitled'}</h3>
            </Link>
            <p>
              {post.Content ? `${post.Content.slice(0, 100)}...` : 'No content available.'}
            </p>
            <Link href={`/${post.slug}`} className="read-more">
              ➜ Read more
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export const dynamic = 'force-dynamic';
