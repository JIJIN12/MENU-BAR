import React, { useEffect, useState } from "react";
import axios from "axios";
import drink1 from "../assets/images/drink1.png";
import drink2 from "../assets/images/drink2.png";
import cocktails from "../assets/images/cocktails.png";
import cocktails2 from "../assets/images/cocktails2.png";
import hookah from "../assets/images/hookah.png";
import cocktails1 from "../assets/images/cocktails1.png";
import background3 from "../assets/images/background3.jpg";
import { Button } from "@mui/material";
import "./css/Drink.css";

export default function Drink() {
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
    <div className=" relative ">
      <img src={background3} className="w-full h-[100vh]" alt="background" />
      <img src={background3} className="w-full h-[100vh]" alt="background" />
      <div className="drink mx-[3rem] bg-[#000000] absolute pt-[3rem] px-2 top-[0]">
        <div className="flex flex-col gap-[1rem]">
          <div className=" border-[1px] border-white">
            <div className="flex justify-evenly">
              <img
                src={drink1}
                className="w-[12rem] h-[16rem] absolute left-[-3.5rem] right-5 top-[-7rem]"
                alt="drink1"
              />
              <div className="mt-[2rem] flex">
                <hr className="w-[10rem] h-4 mt-6" />
                <h1 className="drink-h1 mx-3 text-[2rem] font-semibold">DRINKS</h1>
                <hr className="w-[10rem] h-4 mt-6" />
              </div>
              <img
                src={drink2}
                className="w-[8rem] h-[8rem] absolute right-[-3.5rem] top-[-2rem]"
                alt="drink2"
              />
            </div>

            <div className="drink-details grid grid-cols-2 gap-x-[1rem] gap-y-[1rem]">
              {menudata
                .filter((item) => item.key === "DRINK")
                .map((data) => (
                  <div key={data.id} className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      <p>{data.item_name}</p>
                      {/* <div className="flex-grow flex justify-center">
                    {[...Array(getNumberOfDots(200, 100, 50))].map(
                      (_, index) => (
                        <span key={index} className="mx-1">
                          .
                        </span>
                      )
                    )}
                  </div> */}
                      <p className="flex-grow text-right">${data.price}</p>
                    </div>
                    <div className=" flex justify-start">
                    <p className="drink-des text-[.7rem]">{data.description}</p>
                  </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-[1px] border-white py-4">
            <img
              src={cocktails}
              className="cocktail1 w-[7rem] h-[9rem]  absolute left-[-1.6rem] top-[34rem] "
            />
            <div className="mt-[2rem] flex justify-center">
              <hr className="w-[10rem] h-4 mt-6" />
              <h1 className="drink-h1 mx-3 text-[2rem] font-semibold">BRUNCH</h1>
              <hr className="w-[10rem] h-4 mt-6" />
            </div>
            <div className="drink-details2 grid grid-cols-2 gap-x-[1rem] gap-y-[1rem]">
              {menudata
                .filter((item) => item.key === "BRUNCH")
                .map((data) => (
                  <div key={data.id} className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      <p>{data.item_name}</p>
                      {/* <div className="flex-grow flex justify-center">
                    {[...Array(getNumberOfDots(200, 100, 50))].map(
                      (_, index) => (
                        <span key={index} className="mx-1">
                          .
                        </span>
                      )
                    )}
                  </div> */}
                      <p className="flex-grow text-right">${data.price}</p>
                    </div>
                    <p className="drink-des text-[.7rem]">{data.description}</p>
                  </div>
                ))}
              <img
                src={cocktails2}
                className="cocktail2 w-[8rem] h-[9.5rem] absolute right-[-2.4rem] top-[47rem]"
              />
            </div>
          </div>
          <div className="border-[1px] border-white py-4 pb-[1.5rem]">
            <div className="flex justify-center">
              <img src={hookah} className="w-[9rem] h-[9rem]" />
            </div>
            <div className="mt-[2rem] flex justify-center">
              <hr className="w-[10rem] h-4 " />
              <h1 className="drink-h1 text-[2rem] mt-[-2rem] mx-1 font-semibold">HOOKAH FLAVOURS</h1>
              <hr className="w-[10rem] h-4" />
            </div>
            <div className="drink-details3 grid grid-cols-6 px-2 pt-[1rem]">
              {menudata
                .filter((item) => item.key === "HOOKAH")
                .map((data) => (
                  //   <div key={data.id} className=" flex flex-col">
                  <div className=" drink-hokkah flex justify-between px-2">
                    <p className="text-[.9rem]">{data.item_name}</p>
                  </div>
                  //   </div>
                ))}
            </div>
          </div>
        </div>
        <div>
        <div className="flex justify-center items-center py-[2rem]">
        <Button
              variant="outlined"
              sx={{
                background: "#0096FF",
                color: "white",
                fontWeight: "600",
                "&:hover": {
                  background: "#0096FF", // Change background color on hover
                },
              }}
            >ORDER ONLINE</Button>{" "}
        </div>
        <div className="flex flex-row py-[1rem] mb-[4rem] px-[1rem] bg-yellow-800">
            <div className="px-4 border-r-2 border-dotted border-white">food may not be refunded, if your food was made incorrectly we will remake it for you.</div>
            <div className="px-4 border-r-2 border-dotted border-white">18% service charge will be added to all checks over $100.</div>
            <div  className="px-4">Consuming raw or undercoooked meats, poultry,seafood, shelfish or eggs may increase your risk of foodb0rne illness</div>
        </div>
      </div>
      </div>
     
    </div>
  );
}
