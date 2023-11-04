import React from "react";
import logo_name from "../assets/logo_name.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-4 mb-10 ">
        <img
          src={logo_name}
          alt="articlizer_logo"
          className="w-40 object-contain"
        />
        <button
          type="button"
          onClick={() => {
            console.log("clicked");
          }}
          className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-0 transition-all duration-300 ease-in-out rounded-md px-4 py-2 ml-2 hover:text-lg hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head-text ">
        <span className="text-6xl font-bold blue_gradient">ARTICLIZER</span>
        <br />
        <span className="text-2xl font-bold ">Summarize Articles Using</span>
        <br />
        <h2 className="text-4xl dark_blue_gradient font-extrabold">
          OpenAI GPT-4
        </h2>
      </h1>
      <h2 className="mt-4 desc">
        You can use Articlizer, an open-source article summarizer, to make
        lengthy texts easier to read. It's designed to simplify reading and make
        information more accessible."
      </h2>
    </header>
  );
};

export default Hero;
