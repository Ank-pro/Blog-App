import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-app-be-omega.vercel.app/api/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  return (
    <div className="home">
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog._id}>
            <header>
              <h1>{blog.title}</h1>
              <p>By {blog.author}</p>
            </header>
            <section>
              <p id="summary">{blog.summary}</p>
            </section>
            <footer>
              <a href={`/post/${blog._id}`}>Read More</a>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
