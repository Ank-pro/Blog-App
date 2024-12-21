import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { selectedBlogReducer, initialState, actionTypes } from "./selectedBlogReducer";
import "./post.css";

export default function SelectedBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(selectedBlogReducer, initialState);
  const { blog, loading, error, isDeleted } = state;

  useEffect(() => {
    const fetchBlog = async () => {
      dispatch({ type: actionTypes.SET_LOADING, payload: true });

      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        dispatch({ type: actionTypes.SET_BLOG, payload: response.data });
      } catch (err) {
        dispatch({ type: actionTypes.SET_ERROR, payload: "Failed to fetch the blog." });
      } finally {
        dispatch({ type: actionTypes.SET_LOADING, payload: false });
      }
    };

    fetchBlog();
  }, [id]);

  const handleEdit = () => {
    navigate(`/editBlog/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      dispatch({ type: actionTypes.SET_IS_DELETED, payload: true });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("Error deleting blog:", err);
      dispatch({ type: actionTypes.SET_ERROR, payload: "Failed to delete the blog. Please try again." });
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!blog) {
    return <div className="error">Blog not found</div>;
  }

  return (
    <div className="selected-blog">
      <h1>{blog.title}</h1>
      <p className="author">By {blog.author}</p>
      <p className="summary">{blog.summary}</p>
      <div className="content">
        <p>{blog.content}</p>
      </div>
      <div className="actions">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {isDeleted && (
        <div className="popup">
          <p>Blog deleted successfully!</p>
        </div>
      )}
    </div>
  );
}
