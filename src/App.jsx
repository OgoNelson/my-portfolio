import ButtonLive from "./components/ButtonLive";
import Description from "./components/Description";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" w-[100vw] bg-[#0F1624] font-poppins text-[#fff] pt-[4vh]">
      {/* Home page */}
      <section id="home">
        <div className="h-[96vh] w-[75vw] my-0 mx-auto">
          <Navbar />
          <Description />
          <ButtonLive action="Download My CV" />
        </div>
      </section>
    </div>
  );
}

export default App;
