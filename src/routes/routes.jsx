import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage";
import { Checkout } from "../pages/checkout";
import { ForgotPassword } from "../auth/forgot-password";
import { Shop } from "../pages/shop";
import { Login } from "../auth/login";
import { Signup } from "../auth/signup";
import { WishList } from "../../src/pages/wish-list";
import { Orders } from "../../src/pages/orders";
import { ErrorPage } from "../pages/error-pages/error-page";

export function PageRoutes() {
  return (
    <Routes>
      {/* Home Page flow */}
      <Route index element={<HomePage />} />

      {/* Pages flow */}
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wish-list" element={<WishList />} />
      <Route path="/orders" element={<Orders />} />

      {/* Shop Modal */}

      {/* Authentication flow */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-Password" element={<ForgotPassword />} />

      {/* Error Pages */}
      <Route path="*" element={<ErrorPage />} />

      {/* Empty Array */}
    </Routes>
  );
}
