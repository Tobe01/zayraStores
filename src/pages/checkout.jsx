import { toast } from "react-toastify";
import { Header } from "../components/header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCartItems, getCartQuantity, saveCartItems } from "../../data/cart";
import arrowLeft from "../../public/images/icons/keyboard_arrow_left_24dp_8B1A10_FILL0_wght400_GRAD0_opsz24.svg";
import "./items.css";
import "./checkout.css";
import "./shop.css";
import "../media-queries/checkout.css";

export function Checkout() {
  const [isAvailable, setIsAvailable] = useState(false);
  const [unAvailable, setUnAvailable] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState(() => getCartItems());
  const cartCount = getCartQuantity(checkoutItems);
  const subtotalCents = checkoutItems.reduce(
    (total, item) =>
      total + Number(item.priceCents || 0) * Number(item.quantity || 0),
    0,
  );
  const discountCents = 660;
  const orderTotalCents = Math.max(subtotalCents - discountCents, 0);

  function updateItemQuantity(imageName, changeBy) {
    setCheckoutItems((currentItems) => {
      const nextItems = currentItems.map((item) => {
        if (item.Image !== imageName) {
          return item;
        }

        const nextQuantity = Math.max(1, Number(item.quantity || 0) + changeBy);
        return { ...item, quantity: nextQuantity };
      });

      saveCartItems(nextItems);
      return nextItems;
    });
  }

  function handleDeleteItem(imageName) {
    setCheckoutItems((currentItems) => {
      const nextItems = currentItems.filter((item) => item.Image !== imageName);
      saveCartItems(nextItems);
      return nextItems;
    });

    toast.info("Item removed from cart");
  }

  function paymentNotAvailable() {
    if (isAvailable === false) {
      setIsAvailable(
        toast.info("Payment Method Not available yet!", {
          position: "top-center",
        }),
      );
    }
  }

  function paymentUnavailable() {
    if (unAvailable === false) {
      setUnAvailable(
        toast.info("Payment Method Not available yet!", {
          position: "top-center",
        }),
      );
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <title>checkout</title>
      <Header updateQuantity={cartCount} />
      {/* <!-- Empty Cart Display --> */}

      {checkoutItems.length === 0 && (
        <section className="emptyContainer">
          <div className="emptyCart">
            <img src="images/icons/local_mall_Dark.svg" alt="localMallIcon" />
            <p>Your Cart is Empty</p>
            <Link to="/shop" className="browseButton">
              BROWSE THE SHOP
            </Link>
          </div>
        </section>
      )}

      {checkoutItems.length > 0 && (
        <section className="checkout">
          <div className="deliveredBy">
            <div className="mainCheckout-container">
              {/* Cart Container */}
              <div className="controlQuanContainer">
                <div className="controlCart">
                  <div className="checkoutParent">
                    <p>Shopping Cart ({cartCount})</p>
                  </div>

                  <Link to="/shop">
                    <div className="backToShop">
                      <span>
                        <img src={arrowLeft} />
                      </span>
                      <p>Back to Shop</p>
                    </div>
                  </Link>
                </div>

                <div className="Array-container">
                  {/* Container for array of added items */}
                  <div className="checkoutLeft">
                    {checkoutItems.map((cartItem) => {
                      return (
                        <div className="checkoutContents" key={cartItem.Image}>
                          <div className="checkoutTop">
                            <div className="checkoutImage">
                              <img
                                src={`images/shopItems/${cartItem.Image}`}
                                alt="checkoutImage"
                              />
                            </div>
                            <div className="checkoutItems">
                              <h1>{cartItem.itemDescription}</h1>
                              <p>{`$${(cartItem.priceCents / 100).toFixed(2)}`}</p>

                              <div className="addQuantity">
                                <p>Quantity:</p>
                                <div className="addQuantitySub">
                                  <div
                                    onClick={() =>
                                      updateItemQuantity(cartItem.Image, -1)
                                    }
                                  >
                                    <img
                                      src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                                      alt="minus"
                                    />
                                  </div>
                                  <span>{cartItem.quantity}</span>
                                  <div
                                    onClick={() =>
                                      updateItemQuantity(cartItem.Image, 1)
                                    }
                                  >
                                    <img
                                      src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                                      alt="add"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="deleteContainer">
                            <button
                              type="button"
                              onClick={() => handleDeleteItem(cartItem.Image)}
                            >
                              <img
                                src="images/icons/delete_24dp_8B1A10_FILL0_wght400_GRAD0_opsz24.svg"
                                alt="deleteIcon"
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                {/* <!-- Order summary container --> */}
                <div className="OrderSummary">
                  <div className="orderSummary-Top">
                    <h1>Order Summary</h1>
                    <div className="orderfirst">
                      <div className="subtotal">
                        <p>Subtotal</p>
                        <p>{`$${(subtotalCents / 100).toFixed(2)}`}</p>
                      </div>
                      <div className="discount">
                        <p>Discount</p>
                        <p>{`-$${(discountCents / 100).toFixed(2)}`}</p>
                      </div>
                    </div>

                    <div className="orderSecond">
                      <div className="orderTotal">
                        <p>Order total</p>
                        <p>{`$${(orderTotalCents / 100).toFixed(2)}`}</p>
                      </div>

                      <div className="orderDiscount">
                        <h4>Discounts included:</h4>
                        <p>
                          boohooMAN Up to 70% SALE{" "}
                          <span>{`-$${(discountCents / 100).toFixed(2)}`}</span>
                        </p>
                      </div>
                    </div>

                    <div className="add-container">
                      <Link to="/orders">
                        <button>CHECKOUT</button>
                      </Link>
                      <button onClick={paymentNotAvailable}>
                        <img
                          src="images/icons/apple.webp"
                          alt="apple-logo"
                          loading="lazy"
                        />{" "}
                        Pay
                      </button>
                      <button onClick={paymentUnavailable}>
                        <img
                          src="images/payments/PayPal_Logo_Horizontal_Full_Color_RGB-002-1.webp"
                          alt="paypal-icon"
                        />{" "}
                        Checkout
                      </button>
                    </div>

                    <div className="orderBottom">
                      <img
                        src="images/payments/068BjcjwBw0snwHIq0KNo5m-15.webp"
                        alt="paymentsLogo"
                      />
                      <img
                        src="images/payments/apple-pay.webp"
                        alt="paymentsLogo"
                      />
                      <img
                        src="images/payments/images.webp"
                        alt="paymentsLogo"
                      />
                      <img
                        src="images/payments/monnify.webp"
                        alt="paymentsLogo"
                      />
                      <img
                        src="images/payments/seampay.webp"
                        alt="paymentsLogo"
                      />
                      <img
                        src="images/payments/mastercard (1).webp"
                        alt="paymentsLogo"
                      />
                      <img
                        src="images/payments/verve.webp"
                        alt="paymentsLogo"
                      />
                      <img src="images/payments/visa.webp" alt="paymentsLogo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
