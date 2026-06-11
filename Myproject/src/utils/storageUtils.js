/**
 * Storage Utility Functions for User-Specific Cart and Wishlist
 * Ensures each logged-in user has their own separate cart and wishlist
 */

/**
 * Get the current user from localStorage
 */
export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
};

/**
 * Get user-specific cart key
 * Example: cart_665ab123 (where 665ab123 is user._id)
 */
export const getCartKey = () => {
  const user = getCurrentUser();
  return user?._id ? `cart_${user._id}` : "cart";
};

/**
 * Get user-specific wishlist key
 * Example: wishlist_665ab123
 */
export const getWishlistKey = () => {
  const user = getCurrentUser();
  return user?._id ? `wishlist_${user._id}` : "wishlist";
};

/**
 * Get user's cart items
 */
export const getCart = () => {
  try {
    const cartKey = getCartKey();
    return JSON.parse(localStorage.getItem(cartKey)) || [];
  } catch {
    return [];
  }
};

/**
 * Set user's cart items
 */
export const setCart = (items) => {
  try {
    const cartKey = getCartKey();
    localStorage.setItem(cartKey, JSON.stringify(items));
    // Dispatch custom event to notify listeners
    window.dispatchEvent(new Event("cartUpdated"));
  } catch (error) {
    console.error("Error setting cart:", error);
  }
};

/**
 * Get user's wishlist items
 */
export const getWishlist = () => {
  try {
    const wishlistKey = getWishlistKey();
    return JSON.parse(localStorage.getItem(wishlistKey)) || [];
  } catch {
    return [];
  }
};

/**
 * Set user's wishlist items
 */
export const setWishlist = (items) => {
  try {
    const wishlistKey = getWishlistKey();
    localStorage.setItem(wishlistKey, JSON.stringify(items));
  } catch (error) {
    console.error("Error setting wishlist:", error);
  }
};

/**
 * Add item to user's cart
 */
export const addToCart = (item) => {
  const cart = getCart();
  const existingItem = cart.find((p) => p._id === item._id);

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + (item.quantity || 1);
  } else {
    cart.push({ ...item, quantity: item.quantity || 1 });
  }

  setCart(cart);
  return cart;
};

/**
 * Remove item from user's cart
 */
export const removeFromCart = (itemId) => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item._id !== itemId);
  setCart(updatedCart);
  return updatedCart;
};

/**
 * Update quantity of item in user's cart
 */
export const updateCartQuantity = (itemId, newQuantity) => {
  if (newQuantity < 1) return getCart();

  const cart = getCart();
  const updatedCart = cart.map((item) =>
    item._id === itemId ? { ...item, quantity: newQuantity } : item
  );
  setCart(updatedCart);
  return updatedCart;
};

/**
 * Get total cart count
 */
export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
};

/**
 * Add item to user's wishlist
 */
export const addToWishlist = (item) => {
  const wishlist = getWishlist();
  if (!wishlist.find((p) => p._id === item._id)) {
    wishlist.push(item);
    setWishlist(wishlist);
    return { success: true, message: `${item.name} Added To Wishlist ❤️` };
  }
  return { success: false, message: `${item.name} is already in Wishlist` };
};

/**
 * Remove item from user's wishlist
 */
export const removeFromWishlist = (itemId) => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter((item) => item._id !== itemId);
  setWishlist(updatedWishlist);
  return updatedWishlist;
};

/**
 * Clear user's cart (useful for checkout or logout)
 */
export const clearCart = () => {
  const cartKey = getCartKey();
  localStorage.removeItem(cartKey);
  window.dispatchEvent(new Event("cartUpdated"));
};

/**
 * Clear user's wishlist
 */
export const clearWishlist = () => {
  const wishlistKey = getWishlistKey();
  localStorage.removeItem(wishlistKey);
};
