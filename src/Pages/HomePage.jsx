import React from "react";
import ButtonLive from "../components/ButtonLive";
import Description from "../components/Description";
import Navbar from "../components/Navbar";
import data from "../../database/data";

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
      <section id="projects" className="h-[160vh] w-[75vw] my-0 mx-auto">
        <h2>Projects</h2>
        <div className="grid grid-cols-3 gap-3 mt-14">
          {data.map((data) => (
            <div key={data.id} className="bg-slate-300 h-[70vh] w-[24vw] rounded-xl">
              <h2>{data.title}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
