import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion";
import ReactPlayer from "react-player";

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
            <div className="bg-black-100 text-white z-0">
                <div>
                    <div className="font-family: font-playfair">Your Personal Stylist</div>
                    <div className="font-family: font-montserrat">FOR</div>
                    <div>&amp;</div>
                    <div className="font-family: font-playfair italic">Hair <br/> makeup</div>
                </div>
            </div>
                    
        </motion.div>
    </section>
  )
}

export default About