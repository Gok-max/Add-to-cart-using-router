import React from "react";
import mainImage from "../assets/main.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 right-0 flex items-center p-4 justify-between bg-soft-charcoal z-50">
      <div className="flex items-center space-x-4">
        <img src={mainImage} className="h-20 rounded-lg" />
        <h2 className="text-2xl text-sky-blue ">Indian Mart</h2>
      </div>
      <div className="flex item-center space-x-4 px-10">
        <Link to="/" className="text-sky-blue cursor-pointer py-2">
          Home
        </Link>
        <Link to="/products" className="text-sky-blue cursor-pointer py-2">
          Product
        </Link>
        <Link to="/wishlist" className="text-sky-blue cursor-pointer py-2">
          Wishlist
        </Link>
        <Link to="/cart">
          <button className="bg-light-amber text-sky-blue rounded-lg px-4 py-2 hover:bg-dark-brown">
            Cart
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
