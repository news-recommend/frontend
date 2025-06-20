import React from "react";
import HomeCategory from "./HomeCategory";
import BookmarkCarousel from "./BookmarkCarousel";
import CategoryPosts from "./CategoryPosts";

const Home = () => {
  return (
    <div>
      <HomeCategory />
      <BookmarkCarousel />

      <CategoryPosts />
    </div>
  );
};

export default Home;
