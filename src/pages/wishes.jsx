import "./wish-list.css";
import "../media-queries/wish-list.css";

export function Wishes({ wishItem, onDeleteWish, onAddWishToCart }) {
  if (!wishItem) {
    return null;
  }

  return (
    <div className="wishCont">
      <div className="wishCard">
        <div className="imageDesc">
          <div className="imageContainer">
            <img
              src={`images/shopItems/${wishItem.Image}`}
              alt={wishItem.itemDescription}
            />
          </div>
          <div className="descriptionContainer">
            <div className="priceDesc">
              <h1>{wishItem.itemDescription}</h1>
              <p>{`$${(Number(wishItem.priceCents || 0) / 100).toFixed(2)}`}</p>
            </div>
            <button
              type="button"
              className="js-deleteWish"
              onClick={() => onDeleteWish(wishItem.Image)}
            >
              <img
                src="images/icons/delete_24dp_8B1A10_FILL0_wght400_GRAD0_opsz24.svg"
                alt="deleteIcon"
              />
            </button>
          </div>
        </div>

        <div className="buttonsContainer js-addWishes">
          <button type="button" onClick={() => onAddWishToCart(wishItem)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
