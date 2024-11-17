import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductPage({
  cartItems,
  setCartItems,
  wishlistItems,
  setWishlistItems,
}) {
  const [isProduct, setIsProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setIsProduct(data));
  });

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Remove cart product
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const wishlist = (product) => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (existingItem) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };
  return (
    <div className="pt-28 bg-light-gray">
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-6 scroll-m-2">
        {isProduct.map((product) => (
          <div
            key={product.id}
            className="flex flex-col border border-light-amber rounded-lg shadow-md bg-white p-4 "
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-44 mx-auto mb-4 cursor-pointer"
            />
            <button onClick={() => wishlist(product)} className=" absolute">
              {wishlistItems.find((item) => item.id === product.id) ? (
                <FaHeart className="text-light-amber" />
              ) : (
                <FaRegHeart />
              )}
            </button>
            <h2 className="text-lg text-gray-700 cursor-pointer">
              {product.title}
            </h2>
            <p className="text-lg font-bold">${product.price}</p>
            <div className=" flex-grow"></div>
            <button
              className={`text-white rounded-lg py-2 w-full ${cartItems.find((item) => item.id === product.id) ? "bg-red-500 hover:bg-dark-red" : "bg-light-amber hover:bg-dark-brown"}`}
              onClick={() => addToCart(product)}
            >
              {cartItems.find((item) => item.id === product.id)
                ? "Remove"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
