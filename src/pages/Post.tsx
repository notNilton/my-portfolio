// src/components/Post.tsx
import { FC } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../data/blog-data";
import "../styles/post-style.css";

const Post: FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Encontra o post correspondente ao slug na URL
  const post = blogData.posts.find(
    (post) => post.url.replace(/^\//, "") === slug
  );

  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post não encontrado</h1>
        <p>O post que você está procurando não existe ou foi removido.</p>
      </div>
    );
  }

  return (
    <div className="post-container">
      <article className="post-content">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <time dateTime={post.date} className="post-date">
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>

        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default Post;
