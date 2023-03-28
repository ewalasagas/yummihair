import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion";
import ReactPlayer from "react-player";
import HairPhoto1 from "@/assets/hair_services1.png";
import HairPhoto2 from "@/assets/hair_services2.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const About = (props: Props) => {
  return (
    <section id="about" className="mx-auto min-h-full">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
            <div className="mx-auto w-1/2 py-40 text-center">
                <HText>
                    "Life is more beautiful when you meet the right hair dresser."
                </HText>
                <div className="font-family: font-nanum text-transform: uppercase 
                    text-right text-2xl">- Peter Coppola
                </div>
            </div>     
            <div className="mx-auto flex justify-center z-30">
                <ReactPlayer 
                    url='https://vimeo.com/464877913'
                    playing={true} 
                    loop={true}
                    controls={true}
                    muted={true}
                    config={{
                        vimeo: {}
                    }}
                />
            </div>
            {/* BLACK BACKROUND */}
            <div className="bg-black-100 text-white z-0">
                <div>
                    <div className="font-family: font-playfair">Your Personal Stylist</div>
                    <div className="font-family: font-montserrat">FOR</div>
                    <div>&amp;</div>
                    <div className="font-family: font-playfair italic">Hair <br/> makeup</div>
                </div>
            </div>
            
            {/* HAIR SERVICES */}
            <div>
                {/* PHOTOS - will overlap and flex - clickable (can click back image and flips) */}
                <div>
                    <img alt="hair blonde moneybang style" src={HairPhoto1} />
                    <img alt="two people bayalage blue and other red" src={HairPhoto2} />
                </div>
                {/* HAIR SERVICES ABOUT */}
                <div>
                    <div className="font-family: font-playfair">Professional hair services</div>
                    <div>Yummi hair is a personal and professional hair stylist. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. 
                    </div>
                </div>
            </div>

            {/* FASHION RUNWAY SERVICES */}
        </motion.div>
    </section>
  )
}

export default About