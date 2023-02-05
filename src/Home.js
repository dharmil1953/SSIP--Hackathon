import React from "react";
import ImageSlider from "./ImageSlider";
import NavbarTwo from "./NavbarTwo";

export default function home() {
  return (
    <>
      <ImageSlider />
      <NavbarTwo />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53461.715077756104!2d72.39620823290407!3d24.173603187834114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce9433aa83189%3A0x36a408833757b857!2sPalanpur%2C%20Gujarat%20385001%2C%20India!5e1!3m2!1sen!2sus!4v1665195196121!5m2!1sen!2sus"
        width="1100"
        height="450"
        style={{ border: 0, margin: "25px 50px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
