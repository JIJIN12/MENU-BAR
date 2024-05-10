import React from "react";
import image from "../assets/images/Italian-Cuisine.jpg";
import logo from "../assets/images/logo.jpg";
import background21 from "../assets/images/background22.jpg";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './css/Home.css'
export default function Home() {
  return (
    <div className="">
      <nav className="px-4 py-2 flex justify-between relative mt-[1rem]">
        <div className="flex">
          <div className="">
            {/* Apply filter to the logo image */}
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
        <img src={image} className=" w-full h-[20rem]" alt="background" />
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
      {/* Use filter directly in the style attribute */}
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
    
    </div>
  );
}
