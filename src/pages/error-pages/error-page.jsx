import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import "./error-page.css";
import "../../media-queries/error-page.css";

export function ErrorPage() {
  return (
    <>
      <Header />
      <div className="errorContainer">
        <div>
          <img
            src="images/icons/error_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg"
            width="100"
          />
          <h1>404 ERROR</h1>
          <p>This page does'nt exist!</p>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}
