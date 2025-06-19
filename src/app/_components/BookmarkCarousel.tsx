"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useBookmarkedList } from "../_hooks/useBookmarkedList";

const BookmarkCarousel = () => {
  const { data, isLoading } = useBookmarkedList();
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    if (data && data.length > 0) {
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights);
      setMaxHeight(max);
    }
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    customPaging: () => <div className="w-1 h-1 rounded-full mx-1 cursor-pointer" />,
    dotsClass: "slick-dots flex justify-center items-center mt-4",
    appendDots: (dots: any) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  if (!isLoading && data?.length === 0) {
    return <></>;
  }

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

      <div className="relative !w-[364px] mx-auto">
        {!isLoading && data && data.length >= 3 ? (
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={item.issueId} className="box-border flex justify-center">
                <BookmarkCard
                  item={item}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  height={maxHeight}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="flex justify-center gap-3 items-stretch">
            {data?.map((item, index) => (
              <BookmarkCard
                key={item.issueId}
                item={item}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                height={maxHeight}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mx-[24px] mt-[45px] h-[2px]  bg-[#57869F]" />
    </div>
  );
};

// 카드 컴포넌트 – forwardRef로 참조 가능하게 하고, 높이 props로 제어
const BookmarkCard = React.forwardRef<HTMLDivElement, { item: any; height: number }>(({ item, height }, ref) => (
  <div
    ref={ref}
    className="py-[10px] !w-[173px] px-[29px] rounded-[8px] border border-[#D9D9D9] bg-white text-center flex flex-col justify-center"
    style={{ height: height || "auto" }}
  >
    <span className="text-subtitle font-[600]">{item.issueName}</span>
  </div>
));
BookmarkCard.displayName = "BookmarkCard";

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
