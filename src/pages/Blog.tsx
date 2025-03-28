import { FC } from "react";
import { blogData } from "../data/blog-data";
import "../styles/blog-style.css";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate

const Blog: FC = () => {
  const navigate = useNavigate(); // Crie a instância do navigate

  // Função para extrair o slug da URL (remove a parte do domínio)
  const getSlugFromUrl = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.pathname.replace(/^\//, ""); // Remove a barra inicial
    } catch {
      return url.replace(/^\//, ""); // Caso a URL já seja apenas o path
    }
  };

  const handlePostClick = (url: string) => {
    const slug = getSlugFromUrl(url);
    navigate(`/blog/${slug}`); // Redireciona para /blog/[slug]
  };

  return (
    <div className="blog">
      <div className="posts">
        <h1 className="title">Blog Posts</h1>
        <ul className="list">
          {blogData.posts.map((post, index) => (
            <li key={index} className="post-item">
              <div className="post-header">
                <div // Troquei o <a> por um <div> clicável
                  onClick={() => handlePostClick(post.url)}
                  className="post-link clickable" // Adicionei a classe clickable
                >
                  {post.title}
                </div>
                <span className="post-date">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="post-description">{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
