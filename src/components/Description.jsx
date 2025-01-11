import React from "react";

const Description = () => {
  return (
    <div className="flex w-[69vw] h-[40vh] justify-between">
      <div>
        <h1 className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] text-transparent bg-clip-text">
          Hello, I'M Ogo Nelson,
        </h1>
        <br />
        <h1>frontend developer</h1>
        <h4>
          Crafting Engaging User Experiences: Meet the software Developer
          shaping the Web with focus on collaboration, communication, and
          passion.
        </h4>
      </div>
      <img src="/images/my_dp.jpg" alt="dp" className="h-[40vh] w-[20vw] opacity-30 rounded-full" />
    </div>
  );
};

export default Description;
