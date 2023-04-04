import {motion} from "framer-motion";
import TitleText from "@/shared/TitleText";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import ServicesPhoto from "@/assets/yummihair_services_background.jpg";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({setSelectedPage}: Props) => {
  return (
    <section id="services" className="bg-black text-white">
    <img src={ServicesPhoto} className="h-80 w-full object-cover"/>
   
    <div className="mx-auto w-2/3 pt-24 pb-32">
        <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.Services)}>
    
    {/* IMAGE HERE - DISAPPEAR ON MOBILE */}


        <motion.div
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration: 0.5}}
                variants= {{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}>
            <HText>CUT</HText>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Haircut</div>
                    <div>This includes all haircuts! Specializing in a range of techniques like wet cutting for precision, and the modern, approach of dry cutting. Washing, a treatment if necessary, and a blow dry & style are included.</div>
                    <div>$75.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Beard Trim</div>
                    <div>Self explanitory. Wil only use scissor work or clippers if requested.</div>
                    <div>$30.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Trim</div>
                    <div>Bang or neck trims between haircuts. It is limited to only bangs or necklines, anything more is a haircut.</div>
                    <div>$15.00</div>
                </div>
            </div>
            </motion.div>


            <motion.div
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration: 0.5}}
                variants= {{
                    hidden: {opacity: 0, x: 50},
                    visible: {opacity: 1, x: 0},
                }}>
            <HText>COLOR</HText>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Balayage</div>
                    <div>Pronounced BAH-LEE-AHGE, balayage is actually a French word meaning 'sweeping,' as in to sweep on a hair lightener to create highlights. Balayage is the technique of free-hand painting highlights onto the hair, creating a soft and natural gradation of lightness towards the ends.</div>
                    <div>Starting at $255.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Full Highlights</div>
                    <div>More than 10+ foils, double process. Includes toner and gloss to achieve the desired look.</div>
                    <div>$235.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Partial Highlights</div>
                    <div>Less than 10 foils, double process. Includes toner and gloss to achieve the desired look.</div>
                    <div>$205.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Low Lights</div>
                    <div>Looking to add some contour to your look? Go with lowlights, which are 2-3 shades darker than your base. They work to deepen your natural hair color, adding richness and dimension to any look.</div>
                    <div>$70.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Single Color</div>
                    <div>This is for a single process color. This includes root touch ups like covering grays and covering re-growth from previous single process color. Includes gloss and toner through ends to balance color.</div>
                    <div>$105.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Toner</div>
                    <div>Toner is used to balance color and can be done at the chair or the shampoo bowl.</div>
                    <div>$50.00</div>
                </div>
            </div>
            </motion.div>

            <motion.div
                className="mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration: 0.5}}
                variants= {{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}>
            <HText>MISC</HText>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center">
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Blow-Dry Style</div>
                    <div>This includes a wash, blow-dry, and iron styling if needed.</div>
                    <div>$75.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Braiding</div>
                    <div>This includes a wash, blow-dry, and braid of any style. Must consult with hairstylist before booking this appointment.</div>
                    <div>$70.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Formal Hairstyles</div>
                    <div>Any up-style. Ponytails, chignons, braids, you name it. Price is for in-salon appointment.</div>
                    <div>$70.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Formal Hairstyles to Client</div>
                    <div>Any up-style. Ponytails, chignons, braids, you name it. Please email or contact the hairstylist at least 1 week in advance if it’s for a party of 2 or more, or offsite.</div>
                    <div>$85.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Perm</div>
                    <div>Must consult with hairstylist before booking this appointment.</div>
                    <div>$90.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Hair Extensions</div>
                    <div>By consultation only. During the consultation your stylist will assess your hair color, texture, and desired length. We will custom purchase your extensions and book installation ahead of time. We are only offering beaded weft extensions at this time.</div>
                    <div>$115.00 - $235.00</div>
                </div>
                <div className="m-5">
                    <div className="text-transform: uppercase font-montserrat text-2xl">Makeup Look</div>
                    <div>Natural, classic, glam look. It is up to you! Must consult with hairstylist before booking this appointment.</div>
                    <div>$103.00</div>
                </div>
            </div>
            </motion.div>
        </motion.div>
        </div>
    </section>
  )
}

export default Services