import { Link } from "react-router-dom";
import "./nav.css"

export function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">New Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
