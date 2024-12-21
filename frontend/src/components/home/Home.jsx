import { useState } from "react";
import "./home.css";

export function Home() {
    
  return (
    <div className="home">
      <nav>
        <li>Home</li>
        <li>New Blog</li>
      </nav>

      <article>
        <header>
          <h1>Blog Post Title</h1>
          <p>Author</p>
        </header>
        <section>
          <p id="summary">
            Working from home has become a norm, but staying productive can be
            challenging. This blog explores strategies like creating a dedicated
            workspace, setting clear boundaries, and using productivity tools to
            stay focused. Learn how to manage distractions, maintain a work-life
            balance, and set achievable daily goals. Whether you're a freelancer
            or remote worker, these tips will help you maximize efficiency and
            avoid burnout while working from the comfort of your home.
          </p>
        </section>
      </article>
    </div>
  );
}
