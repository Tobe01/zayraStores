import { Link } from "react-router-dom";
import { AuthHeader } from "../components/auth-header";
import { useEffect, useState } from "react";
import loader from "../../public/images/icons/svg-spinners--tadpole.svg";
import "./forgot-password.css";
import "../media-queries/forgot-password.css";

export function ForgotPassword() {
  const [signup, setSignup] = useState(false);
  const [image, setImage] = useState(
    <img src={loader} alt="loader-spinner" loading="lazy" />,
  );
  const [label, setLabel] = useState("Sending reset link…");
  const [email, setEmail] = useState();

  function getEmail(e) {
    setEmail(e.target.value);
  }

  function showSignup(e) {
    e.preventDefault();
    if (signup === false && email != "") {
      setSignup(true);
    }

    setTimeout(() => {
      setLabel("If an account exists for this email, we’ll send a reset link shortly.");
      setImage("");
    }, 3000);

    setTimeout(() => {
      setSignup(false);
    }, 10000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Forgot Password</title>
      <AuthHeader />

      {signup && (
        <div className="signing-up-modal">
          <div>
            <button>
              {image}
              {label}
            </button>
          </div>
        </div>
      )}

      <main className="main">
        <section className="">
          <div className="forgotPass-container">
            <div className="forgotPass-logo">Forgot Password</div>

            <form onSubmit={showSignup} className="forgotPass-form">
              <div className="forgotPass-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={getEmail}
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
