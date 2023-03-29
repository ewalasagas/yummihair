
import {useForm} from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import TitleText from "@/shared/TitleText";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }


  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            {/* HEADER */}
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration: 0.5}}
                variants= {{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x: 0},
                }}>
                    <TitleText>Message me for inquiries</TitleText>
                    <div className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. </div>
            </motion.div>

            {/* FORM AND IMAGE */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                    className="mt-10 basis-3/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{duration: 0.5}}
                    variants= {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, x: 0},
                }}>
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                    >

                    </form>
                </motion.div>
            </div>
        </motion.div>

    </section>
  )
}

export default index