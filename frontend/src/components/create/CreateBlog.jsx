import { useEffect, useReducer } from "react";
import axios from "axios";
import run from "../../gen-ai/genAI";
import "./create.css";
import { useNavigate } from "react-router-dom";
import {reducer, initialState, actionTypes} from "./createReducerFn"

export function CreateBlog() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { title, author, summary, loading, submitting, isCreated } = state;

  useEffect(() => {
  
    dispatch({ type: actionTypes.SET_SUMMARY, payload: "" });
  }, [title]);

  const generateSummary = async () => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true });
    try {
      const generatedSummary = await run(`Generate a summary not more than 80 words for a blog titled: ${title}`);
      dispatch({ type: actionTypes.SET_SUMMARY, payload: generatedSummary });
    } catch (error) {
      console.error("Error generating summary:", error);
      dispatch({ type: actionTypes.SET_SUMMARY, payload: "Failed to generate summary." });
    } finally {
      dispatch({ type: actionTypes.SET_LOADING, payload: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SET_SUBMITTING, payload: true });

    const blogData = {
      title,
      summary,
      author,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/blogs", blogData);

      if (response.status === 201) {
        dispatch({ type: actionTypes.SET_IS_CREATED, payload: true });
        setTimeout(() => {
          navigate("/");
        }, 1500);

        dispatch({ type: actionTypes.SET_TITLE, payload: "" });
        dispatch({ type: actionTypes.SET_AUTHOR, payload: "" });
        dispatch({ type: actionTypes.SET_SUMMARY, payload: "" });
      } else {
        alert("Error submitting blog");
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("An error occurred while submitting the blog");
    } finally {
      dispatch({ type: actionTypes.SET_SUBMITTING, payload: false });
    }
  };

  return (
    <div className="blog-form-container">
      <h2>Create a New Blog Post</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => dispatch({ type: actionTypes.SET_TITLE, payload: e.target.value })}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => dispatch({ type: actionTypes.SET_AUTHOR, payload: e.target.value })}
            placeholder="Enter author name"
            required
          />
        </div>

        <div>
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            value={summary}
            readOnly
            placeholder="Summary will be generated"
          ></textarea>
        </div>

        <div className="create-actions">
          <button
            type="button"
            className="gen-btn"
            onClick={generateSummary}
            disabled={loading || !title}
          >
            {loading ? "Generating..." : "Generate Summary"}
          </button>
        
          <button
            type="submit"
            className="submit-btn"
            disabled={submitting || !title || !author || !summary}
          >
            {submitting ? "Submitting..." : "Submit Blog"}
          </button>
        </div>

        {isCreated && (
          <div className="popup">
            <p>Blog created successfully!</p>
          </div>
        )}
      </form>
    </div>
  );
}
