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
import image from "../assets/images/Italian-Cuisine.jpg";
import logo from "../assets/images/logo.jpg";
import background21 from "../assets/images/background22.jpg";

import Stack from "@mui/material/Stack";
import logo1 from "../assets/images/logo.jpg";
import location from "../assets/images/marker.png";
import facebook from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import instagram from "../assets/images/instagram.png";
import phone from "../assets/images/phone-flip.png";
import envelope from "../assets/images/envelope.png";

export default function Page() {
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
       <div className="">
      <nav className="px-4 py-2 flex justify-between relative mt-[1rem]">
        <div className="flex">
          <div className="">
            <img src={logo} alt="logo" className="h-[5rem] mix-blend-lighten" />
          </div>
          <div className="flex flex-col gap-y-[-2rem]">
            <h1 className="text-[2rem] font-medium">
              <span style={{ color: "blue" }}>DEEP </span>
              <span>NET</span>
            </h1>
            <h1 className="text-[2rem] text-zinc-300 flex justify-start font-medium">
              SOFT
            </h1>
          </div>
        </div>

        <div className=" h-fit flex flex-row items-end justify-end">
          <ul className="flex gap-4 ">
            <li className="hover:text-blue-500">HOME</li>
            <li className="hover:text-blue-500">MENU</li>
            <li className="hover:text-blue-500">MAKE A RESERVATION</li>
            <li className="hover:text-blue-500">CONTACT US</li>
          </ul>
        </div>
      </nav>
      <header className="mt-[-4rem] ">
        <img src={image} className="w-full h-[20rem]" alt="background" />
        <div className="absolute top-[5.5rem] left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4 w-[100%] h-[20rem] mt-[-1.5rem]">
          <h1 className="font-[600] text-[5rem]">MENU</h1>
          <p className="flex flex-wrap">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            labore, mollitia laudantium, autem reiciendis deserunt animi quam
            nam iusto suscipit expedita. Tempora, sed ab! Beatae velit fugiat
            dolore sapiente nisi.
          </p>
        </div>
      </header>
      <div className="flex justify-center items-center gap-5 bg-opacity-100 mix-blend-lighten">
        <img src={background21} className="w-full h-[5rem]" />
        <div className="absolute">
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              sx={{
                background: "black",
                color: "white",
                fontWeight: "600",
                "&:hover": {
                  background: "#0096FF", // Change background color on hover
                },
              }}
            >
              FOOD
            </Button>

            <Button
              variant="outlined"
              sx={{
                background: "black",
                color: "white",
                fontWeight: "600",
                "&:hover": {
                  background: "#0096FF", // Change background color on hover
                },
              }}
            >
              DRINK
            </Button>
            <Button
              variant="outlined"
              sx={{
                background: "black",
                color: "white",
                fontWeight: "600",
                "&:hover": {
                  background: "#0096FF", // Change background color on hover
                },
              }}
            >
              BRUNCH
            </Button>
          </Stack>
        </div>
      </div>
      <div className=" relative ">
      <img src={background3} className="w-full" alt="background" />
      <img src={background3} className="w-full h-[15rem]" alt="background" />
      <div className="mx-[3rem] bg-[#000000] absolute pt-[3rem] px-2 top-[0]">
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
                <h1 className="mx-3 text-[2rem] font-semibold">DRINKS</h1>
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
                      <p className="flex-grow text-right">${data.price}</p>
                    </div>
                    <p className="text-[.7rem]">{data.description}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="border-[1px] border-white py-4">
            <img
              src={cocktails}
              className="w-[7rem] h-[9rem]  absolute left-[-1.6rem] top-[34rem] "
            />
            <div className="mt-[2rem] flex justify-center">
              <hr className="w-[10rem] h-4 mt-6" />
              <h1 className="mx-3 text-[2rem] font-semibold">BRUNCH</h1>
              <hr className="w-[10rem] h-4 mt-6" />
            </div>
            <div className="  grid grid-cols-2 gap-x-[1rem] gap-y-[1rem]">
              {menudata
                .filter((item) => item.key === "BRUNCH")
                .map((data) => (
                  <div key={data.id} className="p-4 flex flex-col">
                    <div className="flex justify-between">
                      <p>{data.item_name}</p>
                      <p className="flex-grow text-right">${data.price}</p>
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
          <div className="border-[1px] border-white py-4 pb-[1.5rem]">
            <div className="flex justify-center">
              <img src={hookah} className="w-[9rem] h-[9rem]" />
            </div>
            <div className="mt-[2rem] flex justify-center">
              <hr className="w-[10rem] h-4 " />
              <h1 className="text-[2rem] mt-[-2rem] mx-1 font-semibold">HOOKAH FLAVOURS</h1>
              <hr className="w-[10rem] h-4" />
            </div>
            <div className=" grid grid-cols-6 px-2 pt-[1rem]">
              {menudata
                .filter((item) => item.key === "HOOKAH")
                .map((data) => (
                  <div className="flex justify-between px-2" key={data.id}>
                    <p className="text-[.9rem]">{data.item_name}</p>
                  </div>
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
      <div className="">
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
    </div>
    </div>
    </div>
  )
}
