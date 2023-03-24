import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomeImage from "@/assets/main_placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px");

  return (
    <section id="home" className="gap-16 bg-gray-20 md:h-full md:pb-0">
        <motion.div 
            className="flex justify-center items-center bg-cover h-screen" 
            style={{backgroundImage: "url(https://cdn5.vectorstock.com/i/1000x1000/87/99/hair-salon-background-02-vector-28098799.jpg)"}}
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}    
        >
            {/* MAIN IMAGE HERE */}
            <div className="text-center">
                <motion.div 
                    className="font-family: font-fatface text-6xl text-black flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 1}}
                    transition={{duration: 0.5}}
                    variants= {{
                        hidden: {opacity: 0, x:-80},
                        visible: {opacity: 1, x: 0},
                    }}>
                    YUMMI HAIR
                    <span><FaInstagram /></span>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, amount: 1}}
                  transition={{delay: 0.2, duration: 0.5}}
                  variants= {{
                      hidden: {opacity: 0, x:-80},
                      visible: {opacity: 1, x: 0},
                  }}>
                    <button className="bg-transparent hover:bg-black text-black font-semibold 
                        hover:text-white py-2 px-4 border border-black hover:border-transparent">
                        BOOK NOW
                    </button>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Home;