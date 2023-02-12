import React from "react";
import { useSelector } from "react-redux";
import ImageSlider from "./ImageSlider";
import NavbarTwo from "./NavbarTwo";

export default function Home() {

  return (
    <>
      <ImageSlider />
      <NavbarTwo />
      <div class="container" style={{display:"flex"}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53461.715077756104!2d72.39620823290407!3d24.173603187834114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce9433aa83189%3A0x36a408833757b857!2sPalanpur%2C%20Gujarat%20385001%2C%20India!5e1!3m2!1sen!2sus!4v1665195196121!5m2!1sen!2sus"
          width="800"
          height="450"
          style={{ border: 0, margin: "25px 50px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{marginTop:"30px"}}>
          <span >Latest News</span>
          <marquee direction="up" height="400px">
            <li>
              <div class="calander-news">
                <i class="far fa-calendar-alt"></i> <span>19-Sep-2022</span>
              </div>
              <p>
                <a href="https://panchayat.gujarat.gov.in/panchayat/documents/Samras%20Gram%20.pdf">
                  SAMRAS GR{" "}
                </a>
              </p>
            </li>
            <li>
              <div class="calander-news">
                <i class="far fa-calendar-alt"></i> <span>19-Sep-2022</span>
              </div>
              <p>
                <a
                  href="https://panchayat.gujarat.gov.in/panchayat/documents/Industrial Court Order.pdf"
                  target="_blank"
                >
                  {" "}
                  Labor court decesion in VCE union case
                </a>
              </p>
            </li>
            <li>
              <div class="calander-news">
                <i class="far fa-calendar-alt"></i> <span>12-Sep-2022</span>
              </div>
              <p>
                <a
                  href="https://panchayat.gujarat.gov.in/panchayat/documents/New Deputation Policy GR 12.09.2022.PDF"
                  target="_blank"
                >
                  New Deputation Policy GR 12.09.2022
                </a>
              </p>
            </li>
          </marquee>
        </div>
      </div>
    </> 
  );
}
