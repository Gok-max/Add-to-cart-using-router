import React from "react";
import { FaTrash } from "react-icons/fa";

function CartPage({ cartItems, setCartItems }) {
  const quantityCheck = (id, amount) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };

  const removecart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = total * 0.1;
  const discountedTotal = total - discount;

  return (
    <div className="pt-28 flex">
      {/* Cart Items Section */}
      <div className="flex-grow p-4">
        <h1 className="text-center text-2xl font-bold text-light-amber">
          Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg ">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border border-light-amber rounded-xl py-4 px-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 object-contain mb-2 md:mb-0"
                />
                <div className="flex-1 md:ml-4">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <div className="mt-4 flex items-center space-x-2 ml-3">
                    <button
                      onClick={() => quantityCheck(item.id, -1)}
                      className="bg-light-amber text-white px-2 py-1 rounded hover:bg-dark-brown"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => quantityCheck(item.id, 1)}
                      className="bg-light-amber text-white px-2 py-1 rounded hover:bg-dark-brown"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removecart(item.id)}
                      className="px-4 text-light-amber hover:text-dark-brown"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <p className="text-gray-700 font-bold mt-3 ml-3">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Totals Section (20% width, fixed on the right) */}
      <div className="w-1/4 p-4 sticky top-28 bg-gray-light border shadow-lg rounded-lg ml-4">
        <div className="space-y-2 mt-20">
          <h2 className="text-center text-light-amber text-3xl font-semibold">
            Total Cost
          </h2>
          <div className="space-y-2 text-center justify-center">
            <p className="text-xl">Total: ${total.toFixed(2)}</p>
            <p className="text-xl">Discount: -${discount.toFixed(2)}</p>
            <p className="text-2xl text-light-amber font-bold">
              Pay: ${discountedTotal.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
