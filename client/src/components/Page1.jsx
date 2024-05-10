import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import drink1 from "../assets/images/drink1.png";
import drink2 from "../assets/images/drink2.png";
import cocktails from "../assets/images/cocktails.png";
import cocktails2 from "../assets/images/cocktails2.png";
import hookah from "../assets/images/hookah.png";
import cocktails1 from "../assets/images/cocktails1.png";
import background3 from "../assets/images/background3.jpg";

export default function Page1() {
  const [menudata, set_menudata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/menu").then((response) => {
      set_menudata(response.data.details);
    });
  }, []);

  const getNumberOfDots = (containerWidth, itemWidth, priceWidth) => {
    const availableSpace = containerWidth - itemWidth - priceWidth;
    const dotWidth = 4; // Assuming each dot is approximately 4 pixels wide
    return Math.floor(availableSpace / dotWidth);
  };

  return (
    <div>
      <img src={background3} className="w-full" alt="background" />
      <img src={background3} className="w-full" alt="background" />
      <div className="mx-[3rem] bg-black absolute py-4 px-2 top-[29rem]">
        <div className="flex flex-col gap-[1rem]">
          <div className=" border-[1px] border-white">
            <div className="flex justify-evenly">
              <img
                src={drink1}
                className="w-[10rem] h-[7rem] absolute left-[-.2rem] right-5 top-[-4rem]"
                alt="drink1"
              />
              <div className="mt-[2rem] flex">
                <hr className="w-[10rem] h-4 mt-6" />
                <h1 className="mx-3 text-[2rem]">DRINKS</h1>
                <hr className="w-[10rem] h-4 mt-6" />
              </div>
              <img
                src={drink2}
                className="w-[8rem] h-[8rem] absolute right-[-3.5rem] top-[-2rem]"
                alt="drink2"
              />
            </div>

            <div className=" grid grid-cols-2 gap-x-[1rem] gap-y-[1rem]">
              {menudata
                .filter((item) => item.key === "DRINK")
                .map((data) => (
                  <div key={data.id} className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      <p>{data.item_name}</p>
                      <div className="flex-grow flex justify-center">
                        {[...Array(getNumberOfDots(200, 100, 50))].map(
                          (_, index) => (
                            <span key={index} className="mx-1">
                              .
                            </span>
                          )
                        )}
                      </div>
                      <p className="flex-grow text-right price">${data.price}</p>
                    </div>
                    <p className="text-[.7rem]">{data.description}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-[1px] border-white">
            <img
              src={cocktails}
              className="w-[7rem] h-[9rem] absolute left-[-1.6rem] top-[34rem]"
            />
            <div className="mt-[2rem] flex justify-center">
              <hr className="w-[10rem] h-4 mt-6" />
              <h1 className="mx-3 text-[2rem]">BRUNCH</h1>
              <hr className="w-[10rem] h-4 mt-6" />
            </div>
            <div className="  grid grid-cols-2 gap-x-[1rem] gap-y-[1rem]">
              {menudata
                .filter((item) => item.key === "BRUNCH")
                .map((data) => (
                  <div key={data.id} className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      <p>{data.item_name}</p>
                      <div className="flex-grow flex justify-center">
                        {[...Array(getNumberOfDots(200, 100, 50))].map(
                          (_, index) => (
                            <span key={index} className="mx-1">
                              .
                            </span>
                          )
                        )}
                      </div>
                      <p className="flex-grow text-right price">${data.price}</p>
                    </div>
                    <p className="text-[.7rem]">{data.description}</p>
                  </div>
                ))}
              <img
                src={cocktails2}
                className="w-[8rem] h-[9.5rem] absolute right-[-2.4rem] top-[47rem]"
              />
            </div>
          </div>
          <div className="border-[1px] border-white">
            <div className="flex justify-center">
              <img src={hookah} className="w-[9rem] h-[9rem]" />
            </div>
            <div className="mt-[2rem] flex justify-center">
                <hr className="w-[10rem] h-4 " />
                <h1 className="text-[2rem] mt-[-2rem] mx-1">HOOKAH FLAVOURS</h1>
                <hr className="w-[10rem] h-4" />
              </div>
            <div className=" grid grid-cols-6 px-2">
              {menudata
                .filter((item) => item.key === "HOOKAH")
                .map((data) => (
                  <div key={data.id} className="flex justify-between px-2">
                    <p className="text-[.9rem]">{data.item_name}</p>
                    <p className="text-[.9rem]">${data.price}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

