"use client"

import Slider from "react-slick";
import { ImageType } from "../interface";
import { NextPage } from "next";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
    images: ImageType[]
    collapse: boolean
}

const Carousel: NextPage<Props> = ({ images, collapse }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: collapse ? 2 : 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Slider {...settings}>
            {images?.map((image) => {
                return (
                    <div key={image.id}>
                        <Image className="rounded-lg pr-4 w-full h-auto" src={image.path} width={600} height={400} alt={image.filename || 'Image'} />
                    </div>
                )
            })}
        </Slider>
    );
}
export default Carousel