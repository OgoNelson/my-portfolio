import React from "react";

const ButtonLive = (prop) => {
  return (
    <button className="bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] rounded-full py-3 px-5 text-xs">
      {prop.action}
    </button>
  );
};

export default ButtonLive;
