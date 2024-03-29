import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import Contact from "@/scenes/contact";
import DisplayMap from "@/scenes/location";
import Services from "@/scenes/services";
import {useEffect, useState} from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    // return is whenever a function/component disappears
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-20">
      <Navbar 
        isTopOfPage = {isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <About setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage}/>
      <DisplayMap setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App;
