"use client"

import Slider from "react-slick";
import { ImageType } from "../interface";
import { NextPage } from "next";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    images: ImageType[]
}

const Carousel: NextPage<Props> = ({ images }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    };
    return (
        <Slider {...settings}>
            {images?.map((image) => {
                return (
                    <div key={image.id}>
                        <Image className="rounded-lg lg:pr-4 w-full h-auto" src={image.path} width={600} height={400} alt={image.filename || 'Image'} />
                    </div>
                )
            })}
        </Slider>
    );
}
export default Carousel