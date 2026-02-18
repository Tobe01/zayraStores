import { Link } from "react-router-dom";
import "../pages/wish-list.css";
import '../media-queries/wish-list-header.css';

export function WishHeader() {
  return (
    <>
      <nav className="wishesNav">
        <div className="WishesSub">
          <div className="wishesButton">
            <Link to="/shop">
              <button>
                <span>
                  <img
                    src="images/icons/arrow_left_alt_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="arrowLeft"
                  />
                </span>
                Continue
              </button>
            </Link>
          </div>
          <div className="Wishesleft">
            <Link to="/">
              <img src="images/logo/zayra-logo-1.webp" alt="ZaraLogo" />
            </Link>
          </div>

          <div className="wishesCont">
            <img
              src="images/icons/favorite_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt="helpIcon"
            />
            <p>WISHLIST</p>
          </div>
        </div>
      </nav>
    </>
  );
}
