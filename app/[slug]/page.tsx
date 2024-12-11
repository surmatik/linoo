import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchBlogPostBySlug } from '../../lib/api';
import Link from 'next/link';

interface BlogPostProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params; // Destrukturierung nach Auflösung des Promises
    const post = await fetchBlogPostBySlug(slug);

    if (!post) return <p>Blog post not found</p>;

    const titleWords = post.Title.split(' ');
    const firstPart = titleWords.slice(0, 2).join(' '); // First two words
    const highlightedPart = titleWords.slice(2).join(' '); // Rest of the title

    return (
        <div className="blog-post-container">
            {post.Image && post.Image.url && (
                <div className="post-image-wrapper">
                    <Image
                        src={`https://strapi.prod-strapi-fra-01.surmatik.ch/${post.Image.url}`}
                        alt={post.Title}
                        width={800}
                        height={450}
                        className="post-image"
                    />
                </div>
            )}

            <h1 className="post-title">
                {firstPart} <span className="highlighted">{highlightedPart}</span>
            </h1>

            <div className="post-content">
                <ReactMarkdown>{post.Content}</ReactMarkdown> {/* Render Markdown content */}
            </div>

            <Link href="/" className="back-button">
                &#129044; Go back
            </Link>
        </div>
    );
}
