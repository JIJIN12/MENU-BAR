import React from "react";
import logo1 from "../assets/images/logo.jpg";
import location from "../assets/images/marker.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import phone from "../assets/images/phone-flip.png";
import envelope from "../assets/images/envelope.png";

export default function Footer() {
  return (
    <div>
      <div className="px-[2rem] py-[3rem] flex justify-between gap-x-[2rem] ">
        <div className=" border-[1px] border-white rounded-lg flex flex-col items-center justify-center px-[2rem]">
          <p className="font-semibold text-[1.5rem] text-blue-600">CONNECT WITH US</p>
          <div className="flex gap-2">
            <img src={phone} className="h-3" />
            <p>+1 470-788-8255</p>
          </div>
          <div className="flex gap-2">
            <img src={envelope} className="h-3" />

            <p>email@123.com</p>
          </div>
        </div>
        <div className=" border-[1px] border-white rounded-lg px-[2rem] py-[1.5rem] relative">
          <img
            src={logo1}
            className="w-[4rem] mix-blend-lighten absolute top-[-2rem] left-[5rem]"
          />
          <p className="font-semibold text-[1.5rem]">
            <span className="text-blue-600">DEEP </span>
            <span>NET </span>
            <span className="text-gray-600">SOFT</span>
          </p>
          <div className="flex justify-center gap-x-3 h-2">
            <img src={facebook} />
            <img src={twitter} />
            <img src={youtube} />
            <img src={instagram} />
          </div>
        </div>
        <div className=" border-[1px] border-white rounded-lg px-[2rem]">
          <p className="font-semibold text-[1.5rem] text-blue-600">FIND US</p>
          <div className="flex gap-2">
            <img src={location} className="h-5" />
            <div>
              <p> 327 Memorial Dr SE, Atlanta,</p>

              <p> GA 30312, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
