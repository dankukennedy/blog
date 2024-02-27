import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen mt-20">
      Signup
      <div className="flex p-3 max-w-3xl max-auto">
        {/* left */}
        <Link to="/" className="font-bold dark:text-white text-4xl">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg text-white">
            CTVET
          </span>
          Inventory
        </Link>
        <p className="text-sm mt-5">
          This is a Demo project for inventory. You can sign up with your email
          and password or with Google
        </p>
        <div className="">{/* rigt */}</div>
      </div>
    </div>
  );
}
