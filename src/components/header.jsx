import { Link } from "react-router-dom";
import { activateHamburger, closeWindow } from "./drop-menu/dropdown";
import { useState, useEffect } from "react";
import {
  getWishlistQuantity,
  subscribeToWishlistChanges,
} from "../../data/wishlist";
import "./header.css";
import "./interval.css";
import "./sub-header.css";
import "./subhover.css";
import "../media-queries/header.css";

export function Header({ updateQuantity }) {
  const [search, setSearch] = useState(false);
  const [wishQuantity, setWishQuantity] = useState(() => getWishlistQuantity());
  const [isChanged, setIsChanged] = useState(false);
  const [isVisible, setIsvisible] = useState(false);
  const [searchParam, setSearchParam] = useState();
  const [newin, setNewIn] = useState(false);
  const [newin1, setNewIn1] = useState(false);
  const [newin2, setNewIn2] = useState(false);
  const [newin3, setNewIn3] = useState(false);
  const [newin4, setNewIn4] = useState(false);
  const [newin5, setNewIn5] = useState(false);
  const [newin6, setNewIn6] = useState(false);
  const [newin7, setNewIn7] = useState(false);
  const [newin8, setNewIn8] = useState(false);
  const [inchange, setInchange] = useState(
    "REFRESH, REVIVE, RECIRCULATE: RE-ZAY",
  );

  useEffect(() => {
    var interval = setInterval(() => {
      if (isChanged === false) {
        setInchange("FAST SHIPPING FAST DELIVERY FREE RETURN");
        setIsChanged(true);
      } else {
        setInchange("REFRESH, REVIVE, RECIRCULATE: RE-ZAY");
        setIsChanged(false);
      }
    }, 3000);

    return function () {
      clearInterval(interval);
    };
  }, [isChanged]);

  useEffect(() => {
    setWishQuantity(getWishlistQuantity());

    return subscribeToWishlistChanges(() => {
      setWishQuantity(getWishlistQuantity());
    });
  }, []);

  function showMainSearch() {
    if (search === false) {
      setSearch(true);
    }
  }

  function closeMainSearch() {
    if (search === true) {
      setSearch(false);
    }
  }

  function showSubHover() {
    if (isVisible === false) {
      setIsvisible(true);
    } else {
      setIsvisible(false);
    }
  }

  function getSearchParam(event){
    setSearchParam(event.target.value);
  }

  function renderSearchParam(event){
    if(event.key === "Enter"){
      alert(`${searchParam} not yet available in store`);
      setSearchParam('');
    }
  }

  function showNew(){
    if(newin === false){
      setNewIn(true);
    } else {
      setNewIn(false);
    }
  }
  function showNew1(){
    if(newin1 === false){
      setNewIn1(true);
    } else {
      setNewIn1(false);
    }
  }
  function showNew2(){
    if(newin2 === false){
      setNewIn2(true);
    } else {
      setNewIn2(false);
    }
  }
  function showNew3(){
    if(newin3 === false){
      setNewIn3(true);
    } else {
      setNewIn3(false);
    }
  }
  function showNew4(){
    if(newin4 === false){
      setNewIn4(true);
    } else {
      setNewIn4(false);
    }
  }
  function showNew5(){
    if(newin5 === false){
      setNewIn5(true);
    } else {
      setNewIn5(false);
    }
  }
  function showNew6(){
    if(newin6 === false){
      setNewIn6(true);
    } else {
      setNewIn6(false);
    }
  }
  function showNew7(){
    if(newin7 === false){
      setNewIn7(true);
    } else {
      setNewIn7(false);
    }
  }
  function showNew8(){
    if(newin8 === false){
      setNewIn8(true);
    } else {
      setNewIn8(false);
    }
  }

  return (
    <>
      <nav class="header-nav">
        {/* <!-- Contents called inside nav file in javaScript --> */}
        <div className="main-mobile-nav">
          <div className="main-mobile-nav-sub">
            <div className="mobile-nav-left">
              {/* From Uiverse.io by JulanDeAlb */}
              <label className="hamburger" onClick={activateHamburger}>
                <input className="hamburger-input" type="checkbox" />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>

            <div className="mobile-right">
              <Link to="/login">
                <img
                  src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="personIcon"
                />
              </Link>
              <Link to="/wish-list">
                <span className="favContainer">
                  <img
                    src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="favIcon"
                  />
                  <div className="quantity">{wishQuantity}</div>
                </span>
              </Link>

              <Link to="/checkout">
                <span className="quantityContainer">
                  <img
                    src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="localMall"
                  />
                  <div className="quantity">{updateQuantity}</div>
                </span>
              </Link>
            </div>
          </div>

          <div className="mobile-searchbar-main">
            <div className="mobile-search-bar">
              <div onClick={()=>{
                alert(`${searchParam} not yet available in store`);
              }} className="first-button">
                <img
                  src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="search icon"
                />
              </div>
              <input
                onKeyDown={renderSearchParam}
                value={searchParam}
                onChange={getSearchParam}
                className="mobile-input"
                placeholder="Search for products, brands, or categories"
              />
              <div className="second-button">
                <img
                  src="images/icons/photo_camera_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="photoCam"
                />
              </div>
            </div>
          </div>

          <div className="HamburgerContainer">
            <div className="hamburgerItems">
              <div className="closeContainer">
                <Link to="/">
                  <img src="images/logo/zayra-logo-1.webp" alt="zayraLogo" />
                </Link>

                <span className="closeWin" onClick={closeWindow}>
                  <img
                    src="images/icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="closeIcon"
                  />
                </span>
              </div>
              <div className="directoriesContainer">
                <Link to="/">
                  <div>
                    <img
                      src="images/icons/home_app_logo_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="homeIcon"
                    />
                    <p>Home</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/person_heart_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="womenIcon"
                    />
                    <p>Women</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/person_shield_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="menIcon"
                    />
                    <p>Men</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/face_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="kidsIcon"
                    />
                    <p>Kids</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="SportsIcon"
                    />
                    <p>Sport</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/spa_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="beautyIcon"
                    />
                    <p>Beauty</p>
                  </div>
                </Link>
              </div>

              <div className="NewItemsContainer">
                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/notifications_unread_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="newIcon"
                    />
                    <p>NEW IN</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/laundry_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="laudryIcon"
                    />
                    <p>CLOTHING</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/footprint_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="shoesIcon"
                    />
                    <p>SHOES</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/aod_watch_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="watchIcon"
                    />
                    <p>ACCESSORIES</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/sports_football_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="footbalIcon"
                    />
                    <p>SPORTS</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/brand_family_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="brandsIcon"
                    />
                    <p>BRANDS</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/checkroom_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="checkroomIcon"
                    />
                    <p>DESIGNER</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div>
                    <img
                      src="images/icons/price_check_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="priceIcon"
                    />
                    <p>SALE</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="top-nav">
          <div className="top-nav-items">
            <Link>
              <span>
                <p>Contact & FAQs</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Delivery</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Returns</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Track Orders</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Share Your Ideas</p>
              </span>
            </Link>
            <Link>
              <span>
                <p>Gift Cards</p>
              </span>
            </Link>
          </div>
        </div>

        <div className="middle-nav">
          <div className="left">
            <Link to="/">
              <img src="images/logo/zay.webp" width="50" />
            </Link>
            <div>
              <Link to="/shop">
                <div>WOMEN</div>
              </Link>
              <Link to="/shop">
                <div>MEN</div>
              </Link>
              <Link to="/shop">
                <div>KIDS</div>
              </Link>
              <Link to="/shop">
                <div>SPORT</div>
              </Link>
              <Link to="/shop">
                <div>BEAUTY</div>
              </Link>
              <Link to="/shop">
                <div>SHOP</div>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="right-sub">
              <div className="right-sub1">
                <span>
                  <img
                    src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="search icon"
                  />
                </span>
                <input
                  onClick={showMainSearch}
                  placeholder="Search for products, brands, or ..."
                />
              </div>
              <div className="right-sub-icon">
                <Link to="/login">
                  <span>
                    <img
                      src="images/icons/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="login icon"
                    />
                  </span>
                </Link>
                <Link to="/wish-list">
                  <span className="favContainer">
                    <img
                      src="images/icons/favorite_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="wish-list"
                    />
                    <div className="quantity">{wishQuantity}</div>
                  </span>
                </Link>
                <Link to="/checkout">
                  <span className="quantityContainer">
                    <img
                      src="images/icons/local_mall_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="localMall"
                    />
                    <div className="quantity">{updateQuantity}</div>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-nav">
          <div className="bottom-sub">
            <div onClick={()=>{
              showSubHover();
              showNew();
              }} style={{backgroundColor:  newin ? 'grey' : 'black'}} className="NewHover">
              <p>NEW IN</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew1();
              }} style={{backgroundColor:  newin1 ? 'grey' : 'black'}} className="NewHover">
              <p>CLOTHING</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew2();
              }} style={{backgroundColor:  newin2 ? 'grey' : 'black'}} className="NewHover">
              <p>SHOES</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew3();
              }} style={{backgroundColor:  newin3 ? 'grey' : 'black'}} className="NewHover">
              <p>ACCESSORIES</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew4();
              }} style={{backgroundColor:  newin4 ? 'grey' : 'black'}} className="NewHover">
              <p>SPORT</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew5();
              }} style={{backgroundColor:  newin5 ? 'grey' : 'black'}} className="NewHover">
              <p>BRANDS</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew6();
              }} style={{backgroundColor:  newin6 ? 'grey' : 'black'}} className="NewHover">
              <p>DESIGNER</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew7();
              }} style={{backgroundColor:  newin7 ? 'grey' : 'black'}} className="NewHover">
              <p>RE-ZAYRA</p>
            </div>
            <div onClick={()=>{
              showSubHover();
              showNew8();
              }} style={{backgroundColor:  newin8 ? 'grey' : 'black'}} className="NewHover">
              <p>SALE</p>
            </div>
          </div>
        </div>

        {/* Search icon that appears on clicked central search */}
        {search && (
          <div className="main-search">
            <div className="main-search-container">
              <button onClick={closeMainSearch} className="close-button">
                <img
                  src="images/icons/close_small_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="closeMall"
                />
              </button>
              <input
                onKeyDown={renderSearchParam}
                value={searchParam}
                onChange={getSearchParam}
                className="main-search-bar"
                type="search"
                placeholder="Search for products, brands, or categories"
              />
              <button onClick={()=>{
                alert(`${searchParam} not yet available in store`)
              }} className="search-button">
                <img
                  src="images/icons/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="searchIcon"
                />
              </button>
            </div>
          </div>
        )}

        <div className="intervalContainer">
          <div className="interval-sub-container">
            <div className="secondInterval">
              <Link>{inchange} &copy;</Link>
            </div>
          </div>

          {isVisible && (
            <div className="subHover">
              <div className="brandsA-Z">
                <b>
                  <h4>Brands A-Z</h4>
                </b>
                <Link to="/shop">
                  <p>Clothing brands</p>
                </Link>
                <Link to="/shop">
                  <p>Shoe brands</p>
                </Link>
                <Link to="/shop">
                  <p>Accessories brands</p>
                </Link>
                <Link to="/shop">
                  <p>Sports brands</p>
                </Link>
                <Link to="/shop">
                  <p>Designer brands</p>
                </Link>
              </div>
              <div className="ManageBrands">
                <b>
                  <h4>Manage your brands</h4>
                </b>
                <Link to="/shop">
                  <p>Dulale Diva</p>
                </Link>
                <Link to="/shop">
                  <p>Light Studio</p>
                </Link>
                <Link to="/shop">
                  <p>Ellen Joe</p>
                </Link>
                <Link to="/shop">
                  <p>Dallas</p>
                </Link>
                <Link to="/shop">
                  <p>Mag</p>
                </Link>
                <Link to="/shop">
                  <p>Loop</p>
                </Link>
                <Link to="/shop">
                  <p>Syntia Delaney</p>
                </Link>
                <Link to="/shop">
                  <p>Emillia</p>
                </Link>
              </div>
              <div className="ManageBrands">
                <b>
                  <h4>Popular brands</h4>
                </b>
                <Link to="/shop">
                  <p>Julia Alves</p>
                </Link>
                <Link to="/shop">
                  <p>Hanover Fasion Brand</p>
                </Link>
                <Link to="/shop">
                  <p>Aaron Martinex</p>
                </Link>
                <Link to="/shop">
                  <p>Gucci</p>
                </Link>
              </div>
              <div className="subHoverImages">
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/paul-cuoco-CO2vOhPqlrM-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/jonas-b-AVSxYIcBxoM-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/cornelia-ng-zZLhoEwGCeM-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/mostafa-mahmoudi-J4DnKxz_3sA-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/john-torcasio-TJrkkhdB39E-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/arno-senoner-KKZhQk3j0yA-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/tom-radetzki-trdk1R0F3tg-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <Link to="/shop">
                  <div className="subHoverImages-div">
                    <img
                      src="images/brandsHover/paul-lichtblau-updW-QUccFE-unsplash.webp"
                      alt="subhoverImage"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
