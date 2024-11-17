import React from "react";
import mainImage from "../assets/react.svg";
import { Link } from "react-router-dom";
import home from "../assets/home.gif";

function Home() {
  return (
    <div className="flex justify-around items-center p-4 h-screen bg-light-gray">
      <div className="space-y-4">
        <h1 className="text-5xl text-soft-charcoal font-semibold italic">
          Raining Offers
          <br />
          for Cool Winter!
        </h1>
        <p className="text-2xl text-soft-charcoal font-medium italic">
          10% Off On All Products
        </p>
        <div className="space-x-4">
          <Link to="/products">
            <button className="bg-transparent border border-light-amber rounded-lg py-3 px-5 text-light-amber mt-6">
              Shop Now
            </button>
          </Link>
          <Link to="/wishlist">
            <button className="bg-transparent border border-light-amber rounded-lg py-3 px-5 text-light-amber">
              Wishlist
            </button>
          </Link>
        </div>
      </div>
      <img src={home} className="h-72 object-contain" />
    </div>
  );
}

export default Home;
