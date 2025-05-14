import React from "react";
import HomeCategory from "./HomeCategory";
import BookmarkCarousel from "./BookmarkCarousel";
import CategoryPosts from "./CategoryPosts";

const Home = () => {
  return (
    <div>
      <HomeCategory />
      <BookmarkCarousel />
      <div className="mx-[24px] mt-[45px] h-[2px]  bg-[#57869F]" />
      <CategoryPosts />
    </div>
  );
};

export default Home;
