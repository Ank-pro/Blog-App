import React, { useEffect, useState } from "react";
import axios from "axios";
import run from "../../gen-ai/genAI";
import "./edit.css";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", author: "", summary: "" });
  const [loading, setLoading] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    setBlog((prev) => ({ ...prev, summary: "" }));
  }, [blog.title]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const generateSummary = async () => {
    setLoading(true);
    try {
      const generatedSummary = await run(
        `Generate a summary not more than 80 words for a blog titled: ${blog.title}`
      );
      setBlog({ ...blog, summary: generatedSummary });
    } catch (err) {
      console.error("Error generating summary:", err);
      setBlog({ ...blog, summary: "Failed to generate summary." });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blog);
      setIsUpdated(true);
      setTimeout(() => {
        setIsUpdated(false);
        navigate(`/`);
      }, 1500);
    } catch (err) {
      console.error("Error updating blog:", err);
      alert("Failed to update the blog. Please try again.");
    }
  };

  return (
    <div className="edit-blog">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Summary:
          <textarea
            name="summary"
            value={blog.summary}
            readOnly
            rows="6"
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <div className="edit-actions">
          <button
            className="btn"
            type="button"
            onClick={generateSummary}
            disabled={loading || !blog.title}
          >
            {loading ? "Generating..." : "Generate Summary"}
          </button>
          <button className="btn" type="submit">
            Save Changes
          </button>
        </div>
      </form>

      {isUpdated && (
        <div className="popup">
          <p>Changes saved successfully!</p>
        </div>
      )}
    </div>
  );
}
