import { Link } from "react-router-dom";
import { AuthHeader } from "../components/auth-header";
import { useEffect } from "react";
import "./login.css";
import "../media-queries/signup.css";

export function Signup() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>Signup</title>
      <AuthHeader />

      <main className="main">
        <section className="login-container">
          <form className="signup">
            <div className="flex-column">
              <label>Name</label>
            </div>

            <div className="signup-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="-64 0 512 512"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48z" />
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16z" />
              </svg>
              <input
                type="text"
                className="input"
                placeholder="Enter your Full Name"
              />
            </div>

            <div className="flex-column">
              <label>Email</label>
            </div>

            <div className="signup-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                </g>
              </svg>
              <input
                type="text"
                className="input"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex-column">
              <label>Password</label>
            </div>

            <div className="signup-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="-64 0 512 512"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48z" />
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16z" />
              </svg>
              <input
                type="password"
                className="input"
                placeholder="Enter your Password"
              />
            </div>

            <button className="button-submit">Sign Up</button>

            <p className="p">
              Have an account?{" "}
              <Link to="/Login">
                <span className="span">Login Here!</span>
              </Link>
            </p>

            <p className="p line">Or With</p>

            <div className="flex-row">
              <button className="btn google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    style={{ fill: "#FBBB00" }}
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256c0-42.451,10.324-82.483,28.624-117.732l57.992,10.632 25.404,57.644z"
                  />
                  <path
                    style={{ fill: "#518EF8" }}
                    d="M507.527,208.176C512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451h-136.89V208.176z"
                  />
                  <path
                    style={{ fill: "#28B446" }}
                    d="M416.253,455.624C372.396,490.901,316.666,512,256,512c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91z"
                  />
                  <path
                    style={{ fill: "#F14336" }}
                    d="M419.404,58.936C375.068,22.126,318.115,0,256,0c-98.94,0-184.77,56.123-227.376,138.268l83.397,68.276z"
                  />
                </svg>
                Google
              </button>

              <button className="btn apple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22.773 22.773"
                >
                  <path d="M15.769,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />
                  <path d="M20.67,16.716c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74c0.178,1.6,1.446,2.876,3.03,3.578z" />
                </svg>
                Apple
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
