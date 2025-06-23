"use client";
import Image from "next/image";
import "./Map.css";

export default function MapInteractive() {
  return (
    <div className="map-section">
      {/* Background Image */}
      <Image
        src="/images/map.jpg"
        alt="Map Background"
        fill="true"
        className="map-bg-image"
        priority
      />

      {/* Overlays */}
      <div className="map-overlay-white" />
      <div className="map-overlay-left" />
      <div className="map-overlay-right" />

      {/* Text Content */}
      <div className="map-text">
        <h1>PANCHAYATI RAAJ AT A GLANCE</h1>
      </div>
      <div className="map-image">
        <img src="./images/mapcity.png" alt="" />
      </div>
    </div>
  );
}
