import "./Login.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="content">
        <h1>404</h1>
        <h2>Not Found / server maintenance</h2>
        <div className="content-button">
          <Link to="/" className="btn btn-lg btn-warning ">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
