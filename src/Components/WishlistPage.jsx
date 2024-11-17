import React from "react";
import { FaTrash } from "react-icons/fa";

function WishlistPage({ wishlistItems, setWishlistItems }) {
  const removeWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="pt-28">
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold text-light-amber">
          Wishlist
        </h1>
        {wishlistItems.length === 0 ? (
          <p className="text-center text-xl">Your wishlist is empty</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="border border-light-amber rounded-xl shadow-lg p-4 mt-5"
              >
                <img src={item.image} className="h-44 mx-auto mb-4" />
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-700">
                      {item.title}
                    </h2>
                    <p className="text-lg text-black-500 font-bold">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeWishlist(item.id)}
                    className="px-2 mb-5 text-light-amber hover:text-dark-brown"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;
