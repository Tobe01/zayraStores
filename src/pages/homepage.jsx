import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";
import { getCartQuantity } from "../../data/cart";
import "./homepage.css";
import "../media-queries/homePage.css";

export function HomePage() {
  const [updateQuantity] = useState(() => getCartQuantity());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ivestigate image overlap

  return (
    <>
      <title>Zayra Store</title>
      <Header updateQuantity={updateQuantity} />
      <main>
        <div class="home-container">
          <div>
            <div className="first-banner-container">
              <img
                src="images/banners/Grey and Brown Modern Fashion Shop Etsy Shop Cover.gif"
                alt="banner"
                loading="lazy"
              />
            </div>

            <div className="threeCards-container">
              <div className="women">
                <Link to="/shop">
                  <img
                    src="images/women/2927.webp"
                    alt="women"
                    loading="lazy"
                  />
                  <div className="threeCardsLabel">
                    <p>WOMEN'S</p>
                  </div>
                </Link>
              </div>

              <div className="kids">
                <Link to="/shop">
                  <img
                    src="images/kids/2149328403.webp"
                    alt="women"
                    loading="lazy"
                  />
                  <div className="threeCardsLabel">
                    <p>KIDS</p>
                  </div>
                </Link>
              </div>

              <div className="men">
                <Link to="/shop">
                  <img src="images/men/2927.webp" alt="women" loading="lazy" />
                  <div className="threeCardsLabel">
                    <p>MEN'S</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="second-banner-container fade-in-up">
              <img
                src="images/banners/1234.png"
                alt="secondBanner"
                loading="lazy"
              />
            </div>

            <div className="fourSquare">
              <div className="fourCards-container">
                <div className="fourCards-first fade-in-up">
                  <Link to="/shop">
                    <div className="cards-img-container">
                      <img
                        src="images/kids/2147825039.webp"
                        alt="women"
                        loading="lazy"
                      />
                      <div className="exclusives">
                        <div className="sub-ex">
                          <p>
                            40-50% OFF<span>&reg;</span>
                          </p>
                        </div>
                        <p>ICONIC EXCLUSIVES</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="fourCards-first fade-in-up">
                  <Link to="/shop">
                    <div className="cards-img-container">
                      <img
                        src="images/brandsItems/2148660618.webp"
                        alt="women"
                        loading="lazy"
                      />
                      <div className="exclusives">
                        <div className="sub-ex">
                          <p>
                            30-50% OFF<span>&reg;</span>
                          </p>
                        </div>
                        <p>DRESSES</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="fourCards-first fade-in-up">
                  <Link to="/shop">
                    <div className="cards-img-container">
                      <img
                        src="images/women/2147652152.webp"
                        alt="women"
                        loading="lazy"
                      />
                      <div className="exclusives">
                        <div className="sub-ex">
                          <p>
                            UP TO 40% OFF<span>&reg;</span>
                          </p>
                        </div>
                        <p>FOOTWEARS</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="fourCards-first fade-in-up">
                  <Link to="/shop">
                    <div className="cards-img-container">
                      <img
                        src="images/women/2148385673.webp"
                        alt="women"
                        loading="lazy"
                      />
                      <div className="exclusives">
                        <div className="sub-ex">
                          <p>
                            30% OFF<span>&reg;</span>
                          </p>
                        </div>
                        <p>DESIGNERS</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="fourCards-details">
                <p>
                  Ends 6:59AM AEST 30 September 2025. Selected brands, styles
                  and colours listed. Subject to T&C's.
                </p>
              </div>
            </div>

            <div className="six-main">
              <div className="sixCards-details">
                <p>Shop Your Favourites</p>
              </div>

              <div className="sixCards-container">
                <Link to="/shop">
                  <div className="dress fade-in-up">
                    <img
                      src="images/brandsItems/2147897735.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <div>Dresses</div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="dress fade-in-up">
                    <img
                      src="images/brandsItems/2148801500.webp"
                      alt="kids"
                      loading="lazy"
                    />
                    <div>Coats & Jackets</div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="dress fade-in-up">
                    <img
                      src="images/brandsItems/2147966018.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <div>Knitwear</div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="dress fade-in-up">
                    <img
                      src="images/brandsItems/13201.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <div>Jeans</div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="dress fade-in-up">
                    <img
                      src="images/brandsItems/2148984674.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <div>Flats</div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="dress fade-in-up">
                    <img
                      src="images/brandsItems/2148267338.webp"
                      alt="kids"
                      loading="lazy"
                    />
                    <div>Activewear</div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="banner-container3 fade-in-up">
              <img
                src="images/banners/Yellow Pink Bold Fashion Sale New Collection Banner 1.gif"
                alt="banner"
                loading="lazy"
              />
            </div>

            <div className="threeEach-container">
              <div className="threeEach-details">
                <p>Shop The Latest</p>
              </div>

              <div className="threeEach">
                <Link to="/shop">
                  <div className="card fade-in-up">
                    <img
                      src="images/women/29021.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <div className="contents-div">
                      <h3>The Statement Edit</h3>
                      <p>
                        Bold pieces designed to showcase individuality and turn
                        every entrance into a moment.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="card fade-in-up">
                    <img
                      src="images/women/14295.webp"
                      alt="kids"
                      loading="lazy"
                    />
                    <div className="contents-div">
                      <h3>The Power Move Collection</h3>
                      <p>
                        Sharp, confident looks that balance modern
                        sophistication with everyday ease.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="card fade-in-up">
                    <img
                      src="images/women/2149153357.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <div className="contents-div">
                      <h3>The Effortless Wave</h3>
                      <p>
                        Relaxed yet refined styles that transition seamlessly
                        from day to night.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="card fade-in-up">
                    <img
                      src="images/women/2149068952.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <div className="contents-div">
                      <h3>The Luxe Touch</h3>
                      <p>
                        Timeless designs crafted with premium detail for an
                        elevated wardrobe.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="card fade-in-up">
                    <img
                      src="images/women/3841.webp"
                      alt="kids"
                      loading="lazy"
                    />
                    <div className="contents-div">
                      <h3>The Vibrance Series</h3>
                      <p>
                        Playful, expressive cuts that bring energy and freshness
                        to your style.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="card fade-in-up">
                    <img
                      src="images/women/2150677147.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <div className="contents-div">
                      <h3>The Bold Elegance Collection</h3>
                      <p>
                        Sophisticated pieces with a daring edge for
                        unforgettable impressions.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="action-container">
                <Link to="/shop">
                  <div className="purchase-container">
                    NEW HERE? %10 OFF YOUR FIRST PURCHASE
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="refer-container">
                    GET ₦5k CREDIT WHEN YOU REFER A FRIEND
                  </div>
                </Link>
              </div>
            </div>

            <div className="topsellCont">
              <div className="topsellers-container">
                <p>Shop by Category</p>
              </div>

              <div className="eightCards-container">
                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/101172.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <p>Sports</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/2147656957.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <p>Beauty</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/9398.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <p>Women's Designer</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/2148852574.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <p>Men's Designer</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/2147914189.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <p>Re-ZAYRA</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/2148818498.webp"
                      alt="women"
                      loading="lazy"
                    />
                    <p>Home</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/2148630641.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <p>Toys</p>
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="eight-cards-img-container fade-in-up">
                    <img
                      src="images/brandsItems/26461.webp"
                      alt="men"
                      loading="lazy"
                    />
                    <p>Considered</p>
                  </div>
                </Link>
              </div>

              <div className="topsellers-down">
                <p>This Week’s Top Sellers</p>
              </div>
            </div>

            <div className="brandsContainer fade-in-up">
              <div className="brandsDescription">
                <p>Shop brands</p>
              </div>

              <div className="brandsCards">
                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Fashion Brand Art Design Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Beige Minimalist brand fashion logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black & White Minimalist Business Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black & White Modern Professional Fashion Clothing Brand Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black minimalis brand fashion logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black Minimalist Fashion Brand Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black White Minimal Modern Simple Bold Business Mag Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black White Minimalist Professional Initial Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Black White Minimalist Simple Monogram Typography Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Initial Brand Fashion Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Cream Black Typography Loop Brand Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>

                <Link to="/shop">
                  <div className="brandsCards-container">
                    <img
                      className="brandsImg1"
                      src="images/brands/Minimalist typography brand Fashion Logo-Photoroom.png"
                      alt="brand"
                      loading="lazy"
                    />
                  </div>
                </Link>
              </div>

              <div className="brandsButton">
                <Link to="/shop">
                  <button>SHOP ALL BRANDS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
