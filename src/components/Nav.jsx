import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a
            href="#"
            target="_blank"
            className="hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom hover:bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]"
          >
            Projects
          </a>
        </li>
        <li className=" mx-20"><a
            href="#"
            target="_blank"
            className="hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom hover:bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]"
          >
          Technologies</a>
        </li>
        <li><a
            href="#"
            target="_blank"
            className="hover:bg-[length:100%_2px] hover:bg-no-repeat hover:bg-bottom hover:bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6]"
          >
          About me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
