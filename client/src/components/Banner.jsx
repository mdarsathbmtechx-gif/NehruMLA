// src/components/Banner.jsx
import React from "react";
import backgroundImage from "../assets/BannerN1.png"; // relative path

export default function Banner() {
  return (
    <section className="w-full relative pt-20">
      {/* Banner Container with spacing */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full relative">
          <img
            src={backgroundImage}
            alt="Banner"
            className="w-full object-contain rounded-xl shadow-lg animate-fadeZoom animate-float"
          />
        </div>
      </div>
    </section>
  );
}
