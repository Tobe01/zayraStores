import { Link } from "react-router-dom";
import { AuthHeader } from "../components/auth-header";
import { useEffect } from "react";
import "./forgot-password.css";
import "../media-queries/forgot-password.css";

export function ForgotPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Forgot Password</title>
      <AuthHeader />

      <main className="main">
        <section className="">
          <div className="forgotPass-container">
            <div className="forgotPass-logo">Forgot Password</div>

            <form className="forgotPass-form">
              <div className="forgotPass-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <button className="forgotPass-submit" type="submit">
                Send Email
              </button>
            </form>

            <p className="signup-link">
              Don&apos;t have an account?
              <Link to="/Signup" className="signup-link link">
                {" "}
                Sign up now
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
