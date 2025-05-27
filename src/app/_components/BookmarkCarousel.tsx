"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBookmarkedList } from "../_hooks/useBookmarkedList";
const BookmarkCarousel = () => {
  const { data, isLoading } = useBookmarkedList();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    customPaging: (i: any) => <div className="w-1 h-1 rounded-full mx-1 cursor-pointer" />,
    dotsClass: "slick-dots flex justify-center items-center mt-4",
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div>
      <div className="flex items-center px-[24px] mt-[34px] mb-[9px]">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.99984 1.66669L12.5748 6.88335L18.3332 7.72502L14.1665 11.7834L15.1498 17.5167L9.99984 14.8084L4.84984 17.5167L5.83317 11.7834L1.6665 7.72502L7.42484 6.88335L9.99984 1.66669Z"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-title text-[#1F2937] leading-[20px] font-bold ml-[4px]">북마크한 이슈</h3>
      </div>

      <div className=" relative !w-[364px] mx-auto">
        <Slider {...settings}>
          {!isLoading &&
            data &&
            data.map((item, index) => (
              <div key={item.bookmarkId} className=" box-border">
                <div className="py-[10px] !w-[173px] px-[29px] rounded-[8px] border border-[#D9D9D9] bg-white text-center">
                  <div className="w-[115px] h-[66px] relative mx-auto">
                    <Image
                      src={item.thumbnail ?? "/images/example1.jpg"}
                      alt={item.issueName}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <span className="text-subtitle font-[600]">{item.issueName}</span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

const CustomRightArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="xs:block hidden absolute top-1/2 right-[calc(-4%-2px)] w-3 h-3 border-r-2 border-b-2 border-[#57869F] rotate-315 transform -translate-y-1/2 z-20"
      onClick={onClick}
    />
  );
};

const CustomLeftArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="xs:block hidden absolute top-1/2 left-[calc(-4%-2px)] w-3 h-3 border-r-2 border-b-2 border-[#57869F] rotate-135 transform -translate-y-1/2 z-20"
      onClick={onClick}
    />
  );
};

export default BookmarkCarousel;
