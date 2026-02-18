const WISHLIST_STORAGE_KEY = "zayra_wishlist_items";
const WISHLIST_EVENT = "zayra_wishlist_updated";

export const wishlistItems = [];

export function getWishlistItems() {
  if (typeof window === "undefined") {
    return wishlistItems;
  }

  const storedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
  if (!storedWishlist) {
    return wishlistItems;
  }

  try {
    const parsedWishlist = JSON.parse(storedWishlist);
    return Array.isArray(parsedWishlist) ? parsedWishlist : wishlistItems;
  } catch {
    return wishlistItems;
  }
}

export function saveWishlistItems(items) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(WISHLIST_EVENT, { detail: items }));
}

export function addToWishlist(product) {
  const currentWishlist = getWishlistItems();
  const existingItem = currentWishlist.find((item) => item.Image === product.Image);

  if (existingItem) {
    return currentWishlist;
  }

  const nextWishlist = [...currentWishlist, product];
  saveWishlistItems(nextWishlist);
  return nextWishlist;
}

export function removeFromWishlist(imageName) {
  const currentWishlist = getWishlistItems();
  const nextWishlist = currentWishlist.filter((item) => item.Image !== imageName);

  saveWishlistItems(nextWishlist);
  return nextWishlist;
}

export function toggleWishlistItem(product) {
  const currentWishlist = getWishlistItems();
  const existingItem = currentWishlist.find((item) => item.Image === product.Image);

  if (existingItem) {
    return removeFromWishlist(product.Image);
  }

  return addToWishlist(product);
}

export function isInWishlist(imageName, items = getWishlistItems()) {
  return items.some((item) => item.Image === imageName);
}

export function getWishlistQuantity(items = getWishlistItems()) {
  return items.length;
}

export function subscribeToWishlistChanges(listener) {
  if (typeof window === "undefined") {
    return () => {};
  }

  function handleStorageChange(event) {
    if (event.key === WISHLIST_STORAGE_KEY) {
      listener();
    }
  }

  window.addEventListener(WISHLIST_EVENT, listener);
  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(WISHLIST_EVENT, listener);
    window.removeEventListener("storage", handleStorageChange);
  };
}
