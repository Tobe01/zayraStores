import { useState } from 'react';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import "../media-queries/footer.css";
import "./footer.css";

export function Footer() {
  
  const [newsLetter, setNewsLetter] = useState('');

  function getNewsLetter(event){
    setNewsLetter(event.target.value);
  }

  return (
    <footer>
      <div className="footerTop">
        <div className="footer-container">
          <div className="footer-main">
            <div className="zayra-container">
              <div className="zayra-sub">
                <p>ZAYRA</p>
                <ul>
                  <li>
                    <a>About Us</a>
                  </li>
                  <li>
                    <a>Acknowledgement Of Country</a>
                  </li>
                  <li>
                    <a>Affiliates</a>
                  </li>
                  <li>
                    <a>Brands</a>
                  </li>
                  <li>
                    <a>Partnerships</a>
                  </li>
                  <li>
                    <a>Influencers</a>
                  </li>
                  <li>
                    <a>Press</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Terms & Conditions</a>
                  </li>
                  <li>
                    <a>Promotions and Competitions</a>
                  </li>
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Online Security Advice</a>
                  </li>
                </ul>
              </div>

              <div className="zayra-sub-mini">
                <ul>
                  <li>
                    <a>Coupons</a>
                  </li>
                  <li>
                    <a>People & Planet Positive</a>
                  </li>
                  <li>
                    <a>UNiDAYS</a>
                  </li>
                  <li>
                    <a>Uber One</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="helpSupport">
              <p>HELP & SUPPORT</p>
              <ul>
                <li>
                  <a>FAQs & Contact</a>
                </li>
                <li>
                  <a>Delivery</a>
                </li>
                <li>
                  <a>Returns</a>
                </li>
                <li>
                  <a>Size Guide</a>
                </li>
                <li>
                  <a>Gift Cards</a>
                </li>
                <li>
                  <a>Fashion Glossary</a>
                </li>
                <li>
                  <a>Product Ideas</a>
                </li>
                <li>
                  <a>Product Recall</a>
                </li>
                <li>
                  <a>THE ZAYRA X Hubbed</a>
                </li>
              </ul>
            </div>

            <div className="followUs">
              <p>FOLLOW US</p>
              <ul>
                <li>
                  <a>
                    <span></span>Instagram
                  </a>
                </li>
                <li>
                  <a>
                    <span></span>Facebook
                  </a>
                </li>
                <li>
                  <span></span>
                  <a>Twitter</a>
                </li>
                <li>
                  <span></span>
                  <a>Pinterest</a>
                </li>
                <li>
                  <span></span>
                  <a>Youtube</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="newsletter-container">
            <div className="newsleter-sub">
              <div className="stayInTouch">
                <h3>STAY IN TOUCH</h3>
                <p>
                  Sign up to ZAYRA News for your <span>₦5k voucher</span>
                </p>
              </div>
              <div className="buttonContainer">
                <select className="type-btn">
                  <option>Women</option>
                  <option>Men</option>
                </select>
                <input
                  onKeyDown={(event)=>{
                    if(event.key === "Enter"){
                      toast.info(`${newsLetter} successfully signed up`, {
                        position: 'top-center'
                      });
                      setNewsLetter('');
                    }
                  }}
                  onChange={getNewsLetter}
                  value={newsLetter}
                  type="search"
                  placeholder="Enter your email address..."
                />
                <button
                  onClick={()=>{
                    toast.info(`${newsLetter} successfully signed up`, {
                      position: 'top-center'
                    });
                    setNewsLetter('');
                  }} 
                  className="submit-btn">SUBMIT</button>
              </div>

              <div className="menWomenContainer">
                <div className="menWomen-sub js-menWomen-sub">
                  <div className="women-sub">Women</div>
                  <div className="men-sub">Men</div>
                </div>

                <div className="voucher-container">
                  <p className="voucher">
                    <span>* ₦5k</span> voucher for new sign ups only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footerSearches-container">
          <div className="topSearches">
            <h3>OUR TOP SEARCHES</h3>
          </div>

          <div className="topSearches-container">
            <div className="bottomSub">
              <div>
                <p>Lorna Jane</p>
                <p>New Balance</p>
                <p>Nike</p>
                <p>Swimwear</p>
              </div>

              <div>
                <p>Calvin Klein</p>
                <p>Ray-Ban</p>
                <p>Puma</p>
                <p>Polo Ralph Lauren</p>
              </div>

              <div>
                <p>Sneakers</p>
                <p>Sandals</p>
                <p>ASICS</p>
                <p>Dresses</p>
              </div>

              <div>
                <p>Jeans</p>
                <p>Tommy Hilfiger</p>
                <p>Tony Bianco</p>
                <p>P.E Nation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottomMain">
        <div className="footerBottom">
          <div className="brandSignature">
            <div className="brandLogo">
              <img src="images/logo/zayra-logo-2.webp" alt="brandLogo" />
            </div>

            <div className="brandOwnership">
              <h2>Zayra&trade;</h2>
              <p>
                Developed with <span className="hearts">&hearts;</span> by <a href="https://linkedin.com/in/tobechiduru">Tobechi Duru</a> <span>&copy;{new Date().getFullYear()}</span>
              </p>
            </div>
          </div>

          <div className="brandButtons">
            <Link to="#" className="playstore-button">
              <span className="icon">
                <svg
                  fill="currentcolor"
                  viewBox="-52.01 0 560.035 560.035"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"></path>
                  </g>
                </svg>
              </span>
              <span className="texts">
                <span className="text-1">Download form</span>
                <span className="text-2">App store</span>
              </span>
            </Link>

            <Link className="playstore-button" to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="icon"
                viewBox="0 0 512 512"
              >
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span className="texts">
                <span className="text-1">GET IT ON</span>
                <span className="text-2">Google Play</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
