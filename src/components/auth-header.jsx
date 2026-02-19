import { Link } from "react-router-dom";
import "../auth/login.css";
import "../auth/signup.css";
import "../media-queries/auth-header.css";

export function AuthHeader() {
  return (
    <nav class="logingNav">
      <div class="logingNav-main">
        <Link to="/shop">
          <button>
            <span>
              <img
                src="images/icons/arrow_left_alt_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg"
                alt="arrowLeft"
              />
            </span>
            Continue Shopping
          </button>
        </Link>
        <div class="logingNavIcon">
          <Link to="/">
            <img src="images/logo/white-black.webp" alt="ZaraLogo" />
          </Link>
        </div>

        <div class="faqs">
          <a>
            <img
              src="images/icons/help_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="helpIcon"
            />
            <p>Contact & FAQs</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
