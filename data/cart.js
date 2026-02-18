const CART_STORAGE_KEY = "zayra_cart_items";

export const cartItems = [];

export function getCartItems() {
  if (typeof window === "undefined") {
    return cartItems;
  }

  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  if (!storedCart) {
    return cartItems;
  }

  try {
    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart : cartItems;
  } catch {
    return cartItems;
  }
}

export function saveCartItems(items) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function clearCartItems() {
  saveCartItems([]);
  return [];
}

export function addToCart(product) {
  const currentCart = getCartItems();
  const existingItem = currentCart.find((item) => item.Image === product.Image);

  let nextCart;
  if (existingItem) {
    nextCart = currentCart.map((item) => {
      if (item.Image !== product.Image) {
        return item;
      }

      return {
        ...item,
        quantity: Number(item.quantity || 0) + Number(product.quantity || 0),
      };
    });
  } else {
    nextCart = [...currentCart, product];
  }

  saveCartItems(nextCart);
  return nextCart;
}

export function getCartQuantity(items = getCartItems()) {
  return items.reduce((total, item) => total + Number(item.quantity || 0), 0);
}
