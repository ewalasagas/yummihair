import HairPhoto1 from "@/assets/hair_photo1.png";
import HairPhoto2 from "@/assets/hair_photo2.png";
import TitleText from "@/shared/TitleText";

type Props = {};

const services = (props: Props) => {
  return (
    <div className="mx-auto w-2/3">
        <hr className="md:flex w-2/3 h-1 mx-auto my-20 bg-black-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        {/* HAIR SERVICES */}
        <div className="mt-10 justify-between gap-8 md:flex">
            {/* PHOTOS - will overlap and flex - clickable (can click back image and flips) */}
            <div className="">
                <img alt="hair blonde moneybang style" src={HairPhoto1} 
                    className=""/>
            </div>
            {/* HAIR SERVICES ABOUT */}
            <div className="mt-10">
                <TitleText>Professional hair services</TitleText>
                <div>Yummi hair is a personal and professional hair stylist. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. 
                </div>
            </div>
        </div>
        <hr className="md:flex w-1/3 h-0.5 mx-auto my-16 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        {/* FASHION RUNWAY SERVICES */}
        <div className=" justify-between gap-8 md:flex">
            <div>
                <TitleText>Fashion runway services</TitleText>
                <div className="mb-10">Yummi hair is a personal and professional hair stylist. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. 
                </div>
            </div>
            {/* PHOTOS - will overlap and flex - clickable (can click back image and flips) */}
            <div>
                <img alt="model" src={HairPhoto2} />
            </div>
        </div>
        <hr className="md:flex w-2/3 h-1 mx-auto my-20 bg-black-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  )
}

export default services