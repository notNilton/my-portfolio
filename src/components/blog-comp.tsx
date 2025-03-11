import { FC } from "react";
import { blogData } from "../data/blog-data";
import "../styles/blog-style.css";

const Blog: FC = () => {
  return (
    <div className="blog">
      <div className="description">
        <h1 className="title">{blogData.title}</h1>
        <p className="text">{blogData.description}</p>
      </div>

      <div className="posts">
        <h1 className="title">Recent Blog Posts</h1>
        <ul className="list">
          {blogData.posts.map((post, index) => (
            <li key={index}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="post-link"
              >
                {post.title}
              </a>
              <p className="post-description">{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
