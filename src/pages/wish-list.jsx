import { Link } from "react-router-dom";
import { WishHeader } from "../components/wish-list-header";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addToCart } from "../../data/cart";
import {
  getWishlistItems,
  removeFromWishlist,
  subscribeToWishlistChanges,
} from "../../data/wishlist";
import { Wishes } from "./wishes";
import "./wish-list.css";
import "../media-queries/wish-list.css";

export function WishList() {
  const [wishlistItems, setWishlistItems] = useState(() => getWishlistItems());

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setWishlistItems(getWishlistItems());

    return subscribeToWishlistChanges(() => {
      setWishlistItems(getWishlistItems());
    });
  }, []);

  function handleDeleteWish(imageName) {
    const nextWishes = removeFromWishlist(imageName);
    setWishlistItems(nextWishes);
    toast.info("Item removed from wishlist");
  }

  function handleAddToCart(wishItem) {
    addToCart({
      Image: wishItem.Image,
      itemDescription: wishItem.itemDescription,
      priceCents: wishItem.priceCents,
      quantity: 1,
    });

    const nextWishes = removeFromWishlist(wishItem.Image);
    setWishlistItems(nextWishes);
    toast.success("Item added to cart");
  }

  return (
    <>
      <title>Wishes</title>
      
      <WishHeader />{" "}

      {/* <!-- Empty Cart Display --> */}
      {wishlistItems.length === 0 && (
        <section
          className="emptyWishes"
          style={{ visibility: "visible", display: "flex" }}
        > 
        <div>
          <img
            src="images/icons/personal_bag_question_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="emptyLuggage"
          />
          <p>You Have No wishlist Yet</p>
          <Link to="/shop">
            <button>BROWSE THE SHOP</button>
          </Link>
        </div>
        </section>
      )}

      {wishlistItems.length > 0 && (
        <main className="wishU">
          <section className="wishlist-container">
            {wishlistItems.map((wishItem) => {
              return (
                <Wishes
                  key={wishItem.Image}
                  wishItem={wishItem}
                  onDeleteWish={handleDeleteWish}
                  onAddWishToCart={handleAddToCart}
                />
              );
            })}
          </section>
        </main>
      )}
    </>
  );
}
