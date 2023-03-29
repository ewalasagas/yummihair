import HairPhoto1 from "@/assets/hair_services1.png";
import HairPhoto2 from "@/assets/hair_services2.png";
import FashionPhoto1 from "@/assets/fashion1.png"; 
import FashionPhoto2 from "@/assets/fashion2.png";
import TitleText from "@/shared/TitleText";

type Props = {};

const services = (props: Props) => {
  return (
    <div className="mx-auto w-5/6">
        <hr className="md:flex w-5/6 h-1 mx-auto my-20 bg-black-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        {/* HAIR SERVICES */}
        <div className="grid grid-cols-2 gap-3">
            {/* PHOTOS - will overlap and flex - clickable (can click back image and flips) */}
            <div className="">
                <img alt="hair blonde moneybang style" src={HairPhoto1} 
                    className=""/>
                <img alt="two people bayalage blue and other red" src={HairPhoto2} 
                    className="" />
            </div>
            {/* HAIR SERVICES ABOUT */}
            <div>
                <TitleText>Professional hair services</TitleText>
                <div>Yummi hair is a personal and professional hair stylist. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. 
                </div>
            </div>
        </div>
        <hr className="md:flex w-1/3 h-0.5 mx-auto my-40 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        {/* FASHION RUNWAY SERVICES */}
        <div className="grid grid-cols-2 gap-3">
            <div>
                <TitleText>Professional hair services</TitleText>
                <div>Yummi hair is a personal and professional hair stylist. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. 
                </div>
            </div>
            {/* PHOTOS - will overlap and flex - clickable (can click back image and flips) */}
            <div>
                <img alt="model" src={FashionPhoto1} />
                <img alt="model with hat" src={FashionPhoto2} />
            </div>
        </div>
        <hr className="md:flex w-5/6 h-1 mx-auto my-20 bg-black-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  )
}

export default services