import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import backShop from "../../public/images/icons/CLOSE-BLACK.svg";
import {
  isInWishlist,
  subscribeToWishlistChanges,
  toggleWishlistItem,
} from "../../data/wishlist";

export function ViewCard({
  image1,
  image2,
  image3,
  itemName,
  itemDescription,
  priceCents,
  count,
  reviews,
  itemCategory,
  productDesc,
  onClickAction,
  quantity,
  setQuantity,
  addItem,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWished, setIsWished] = useState(() => isInWishlist(image1));
  const likeToggleId = `like-toggle-${String(image1).replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  useEffect(() => {
    setIsWished(isInWishlist(image1));
  }, [image1]);

  useEffect(() => {
    return subscribeToWishlistChanges(() => {
      setIsWished(isInWishlist(image1));
    });
  }, [image1]);

  function rightSlide() {
    setCurrentSlide((prev) => (prev + 1) % 3);
  }

  function leftSlide() {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  }

  function handleAddToCart() {
    addItem({
      Image: image1,
      itemDescription,
      priceCents,
      quantity: quantity > 0 ? quantity : 1,
    });

    toast.success(`${itemName}, added to cart`);
  }

  function handleWishToggle() {
    const nextWishes = toggleWishlistItem({
      Image: image1,
      itemName,
      itemDescription,
      priceCents,
      quantity: 1,
    });

    const hasItem = nextWishes.some((wishItem) => wishItem.Image === image1);
    setIsWished(hasItem);

    if (hasItem) {
      toast.success(`${itemName}, added to wishlist`);
      return;
    }

    toast.info(`${itemName}, removed from wishlist`);
  }

  function increaseQuantity() {
    setQuantity((currentQuantity) => Math.min(currentQuantity + 1, 10));

    if(quantity === 10){
      toast.error("quantity can't be more than 10", {
        position: 'bottom-right'
      })
    }
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) => Math.max(currentQuantity - 1, 1));

    if(quantity === 1){
      toast.error("quantity can't be less than 1", {
        position: 'bottom-right'
      })
    }
  }

  return (
    <div className="viewItemContainer">
      {/* Items rendered in Shop.js */}
      <div className="viewSub">
        <div onClick={onClickAction} className="backToShop">
          <img
            src={backShop}
            alt="arrowBack"
          />
        </div>

        <div className="viewCards">
          <div className="imgContainer">
            {currentSlide === 0 && (
              <img
                src={`images/shopItems/${image1}`}
                alt="item-images"
                loading="lazy"
              />
            )}

            {currentSlide === 1 && (
              <img
                src={`images/shopItems/${image2}`}
                alt="item-images"
                loading="lazy"
              />
            )}

            {currentSlide === 2 && (
              <img
                src={`images/shopItems/${image3}`}
                alt="item-images"
                loading="lazy"
              />
            )}

            <div className="arrowDiv">
              <button onClick={leftSlide}>
                <img
                  src="images/icons/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="arrowLeft"
                />
              </button>
              <button onClick={rightSlide}>
                <img
                  src="images/icons/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                  alt="arrowRight"
                />
              </button>
            </div>
          </div>

          <div className="itemsCont">
            <div className="itemCost">
              <div className="itemDetail">
                <div>
                  <h1>{itemDescription}</h1>

                  {/* From Uiverse.io by SalladShooter */}
                  <div className="like-wrapper">
                    <input
                      className="check"
                      type="checkbox"
                      id={likeToggleId}
                      checked={isWished}
                      onChange={handleWishToggle}
                    />
                    <label className="container" htmlFor={likeToggleId}>
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon inactive"
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c31.1-22.6 71.4-31.7 110.8-24.2C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9z" />
                      </svg>

                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon active"
                      >
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                      </svg>

                      <div className="checkmark" />
                    </label>
                  </div>
                </div>

                <div>
                  <img
                    src="images/ratings/star_24dp_B89230_FILL1_wght700_GRAD0_opsz24.svg"
                    alt="rating"
                  />
                  <p>
                    {count / 10}
                    <span>({reviews} reviews)</span>
                  </p>
                </div>
              </div>

              <div className="Itemu">
                <div className="categoryContainer">
                  <div className="itemCategory">
                    <p>Category:</p>
                    <h4>{itemCategory}</h4>
                  </div>

                  <div className="itemOrder">
                    <img
                      src="images/icons/delivery_truck_speed_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                      alt="deliveryTruck"
                    />
                    <p>Express delivery available</p>
                  </div>
                </div>

                <div className="itemPrice">
                  <p>Price:</p>
                  <h1>{`$${(priceCents / 100).toFixed(2)}`}</h1>
                </div>
              </div>
            </div>

            <div className="itemDescription">
              <h1>Description:</h1>
              <p>{productDesc}</p>
            </div>

            <div className="addQuantity">
              <p>Quantity:</p>
              <div className="addQuantitySub">
                <div onClick={decreaseQuantity}>
                  <img
                    src="images/icons/check_indeterminate_small_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="minus"
                  />
                </div>
                {/* <input /> */}
                <span>{quantity}</span>
                <div onClick={increaseQuantity}>
                  <img
                    src="images/icons/add_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="add"
                  />
                </div>
              </div>
            </div>

            <button onClick={handleAddToCart} className="addItem">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
