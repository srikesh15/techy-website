import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link to="/" className="not-found-button">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;