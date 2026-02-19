import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ShopCard } from "./shopcards";
import { shopData } from "../../data/shopdata";
import { mensData } from "../../data/mensData.js";
import { MenCard } from "./menCards";
import { KidsCard } from "./kidsCards.jsx";
import { kidsData } from "../../data/kidsData.js";
import { WomensCard } from "./womensCards.jsx";
import { womensData } from "../../data/womensData.js";
import { addToCart, getCartQuantity } from "../../data/cart";

export function Shop() {
  const [quantity, setQuantity] = useState(1);
  const [updateQuantity, setUpdateQuantity] = useState(() => getCartQuantity());
  const [shopItems, setShopItems] = useState(true);
  const [mensItems, setMensItems] = useState(false);
  const [kidsItems, setKidsItems] = useState(false);
  const [womensItems, setWomensItems] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function addItem(product) {
    const nextCart = addToCart(product);
    setUpdateQuantity(getCartQuantity(nextCart));
    setQuantity(1);
  }

  function showShopItems() {
    if (shopItems === false) {
      setShopItems(true);
      setMensItems(false);
      setKidsItems(false);
      setWomensItems(false);
    }
  }

  function showMensItems() {
    if (mensItems === false) {
      setMensItems(true);
      setShopItems(false);
      setKidsItems(false);
      setWomensItems(false);
    }
  }

  function showKidsItems() {
    if (kidsItems === false) {
      setKidsItems(true);
      setShopItems(false);
      setMensItems(false);
      setWomensItems(false);
    }
  }

  function showWomensItems() {
    if (womensItems === false) {
      setWomensItems(true);
      setKidsItems(false);
      setShopItems(false);
      setMensItems(false);
    }
  }

  return (
    <>
      <title>Shop</title>
      <Header updateQuantity={updateQuantity} />

      <main>
        <div className="shop-main-container">
          <div className="shop-container">
            <div className="shop-container-sub">
              {/* <!-- Rendered in JavaScript --> */}
              <div className="trend">
                <h1>Trending Now</h1>
                <h3>Fill Your Wardrobe With The Latest Looks</h3>
              </div>
              <div className="trend1">
                <button
                  onClick={showShopItems}
                  style={{
                    backgroundColor: shopItems ? "grey" : "white",
                    color: shopItems ? "white" : "black",
                  }}
                  className="fashion"
                  data-item
                >
                  AARON MARTINEZ
                </button>
                <button
                  onClick={showMensItems}
                  style={{
                    backgroundColor: mensItems ? "grey" : "white",
                    color: mensItems ? "white" : "black",
                  }}
                >
                  Men's
                </button>
                <button
                  onClick={showKidsItems}
                  style={{
                    backgroundColor: kidsItems ? "grey" : "white",
                    color: kidsItems ? "white" : "black",
                  }}
                >
                  Kids
                </button>
                <button
                  onClick={showWomensItems}
                  style={{
                    backgroundColor: womensItems ? "grey" : "white",
                    color: womensItems ? "white" : "black",
                  }}
                >
                  Women's
                </button>
              </div>
            </div>

            <div className="main-shopItems">
              {/* <!-- Shop items called inside js --> */}
              <div>
                {/* <!-- All Shop Items rendered in JavaScript --> */}
                <div className="item-container fade-in-up">
                  {shopItems &&
                    shopData.map((shopItems) => {
                      return (
                        <ShopCard
                          key={shopItems.id}
                          image1={shopItems.images.image1}
                          image2={shopItems.images.image2}
                          image3={shopItems.images.image3}
                          itemName={shopItems.itemName}
                          itemDescription={shopItems.itemDescription}
                          priceCents={shopItems.priceCents}
                          btn1={shopItems.colorPicker.btn1}
                          btn2={shopItems.colorPicker.btn2}
                          btn3={shopItems.colorPicker.btn3}
                          count={shopItems.ratings.count}
                          reviews={shopItems.ratings.reviews}
                          itemCategory={shopItems.itemCategory}
                          productDesc={shopItems.productDesc}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          addItem={addItem}
                        />
                      );
                    })}
                </div>

                <div className="mensItem-container fade-in-up">
                  {mensItems &&
                    mensData.map((mensItem) => {
                      return (
                        <MenCard
                          key={mensItem.id}
                          image1={mensItem.images.image1}
                          image2={mensItem.images.image2}
                          image3={mensItem.images.image3}
                          itemName={mensItem.itemName}
                          itemDescription={mensItem.itemDescription}
                          priceCents={mensItem.priceCents}
                          btn1={mensItem.colorPicker.btn1}
                          btn2={mensItem.colorPicker.btn2}
                          btn3={mensItem.colorPicker.btn3}
                          count={mensItem.ratings.count}
                          reviews={mensItem.ratings.reviews}
                          itemCategory={mensItem.itemCategory}
                          productDesc={mensItem.productDesc}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          addItem={addItem}
                        />
                      );
                    })}
                </div>

                <div className="kidsItem-container fade-in-up">
                  {kidsItems &&
                    kidsData.map((kidsItem) => {
                      return (
                        <KidsCard
                          key={kidsItem.id}
                          image1={kidsItem.images.image1}
                          image2={kidsItem.images.image2}
                          image3={kidsItem.images.image3}
                          itemName={kidsItem.itemName}
                          itemDescription={kidsItem.itemDescription}
                          priceCents={kidsItem.priceCents}
                          btn1={kidsItem.colorPicker.btn1}
                          btn2={kidsItem.colorPicker.btn2}
                          btn3={kidsItem.colorPicker.btn3}
                          count={kidsItem.ratings.count}
                          reviews={kidsItem.ratings.reviews}
                          itemCategory={kidsItem.itemCategory}
                          productDesc={kidsItem.productDesc}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          addItem={addItem}
                        />
                      );
                    })}
                </div>

                <div className="womensItem-container fade-in-up">
                  {womensItems &&
                    womensData.map((womensItem) => {
                      return (
                        <WomensCard
                          key={womensItem.id}
                          image1={womensItem.images.image1}
                          image2={womensItem.images.image2}
                          image3={womensItem.images.image3}
                          itemName={womensItem.itemName}
                          itemDescription={womensItem.itemDescription}
                          priceCents={womensItem.priceCents}
                          btn1={womensItem.colorPicker.btn1}
                          btn2={womensItem.colorPicker.btn2}
                          btn3={womensItem.colorPicker.btn3}
                          count={womensItem.ratings.count}
                          reviews={womensItem.ratings.reviews}
                          itemCategory={womensItem.itemCategory}
                          productDesc={womensItem.productDesc}
                          quantity={quantity}
                          setQuantity={setQuantity}
                          addItem={addItem}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
