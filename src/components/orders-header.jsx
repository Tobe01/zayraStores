import { Link } from "react-router-dom";
import "./orders-header.css";

export function OrdersHeader() {
  return (
    <nav className="checkoutNav">
      <div className="checkoutSub">
        <div className="Checkoutleft">
          <Link to="/">
            <img src="images/logo/zayra-logo-1.webp" alt="ZaraLogo" />
          </Link>
        </div>
        <div className="checkoutRight">
          <img
            src="images/icons/lock_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="lockIcon"
          />
          <h1>SECURE CHECKOUT</h1>
        </div>
      </div>
    </nav>
  );
}
