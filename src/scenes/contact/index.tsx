
import {useForm} from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import TitleText from "@/shared/TitleText";
import ContactUsPageGraphic from "@/assets/contact_us_photo.png";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {
    const inputStyles = `mt-5 w-full rounded-lg bg-primary-300 
        px-5 py-3 placeholder-white`;

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
    <section id="contact" className="mx-auto w-2/3 pt-24 pb-32">
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

                <div className="">
                    {/* REPLACE EMAIL WITH THE ANONYMOUS URL EMAIL */}
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/ealasagas@gmail.com"
                        method="POST"
                    >
                        {/* NAME */}
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                            </p>
                        )}

                        {/* EMAIL */}
                        <input 
                            className={inputStyles}
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        {/* MESSAGE */}
                        <textarea 
                            className={inputStyles}
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                        >
                            SUBMIT
                        </button>
                      
                    </form>
                </div>
                </motion.div>
                <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount:0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants= {{
                        hidden: {opacity: 0, y: 50},
                        visible: {opacity: 1, x: 0},
                }}>
                    <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                        <img 
                            className="w-full"
                            alt="contact-us-page-graphic"
                            src={ContactUsPageGraphic}
                        />
                    </div>
                

                </motion.div>
            </div>
        </motion.div>

    </section>
  )
}

export default index