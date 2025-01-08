import React from "react";
import ButtonLive from "../components/ButtonLive";
import Description from "../components/Description";
import Navbar from "../components/Navbar";
import SliderCard from "../components/SliderCard";
import Slider from "../components/SliderCard";

const HomePage = () => {
  return (
    <div className=" w-[100vw] bg-[#0F1624] font-poppins text-[#fff] pt-[4vh]">
      {/* Home page */}
      <section id="home" className="h-[96vh] w-[75vw] my-0 mx-auto">
        <div>
          <Navbar />
          <Description />
          <ButtonLive action="Download My CV" />
        </div>
      </section>
      {/* Projects page */}
      <section id="projects" className="h-[100vh] w-[75vw] mx-auto">
        <h2>Projects</h2>
        <SliderCard/>
      </section>
    </div>
  );
};

export default HomePage;
