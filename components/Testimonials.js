"use client";

import Masonry from "react-masonry-css";
import data from "@/data/reviews";
import Heading from "./Heading";
import Review from "./Review";
import { useState } from "react";
import Link from "next/link";

const Testimonials = () => {
  const [count, setCount] = useState(6);

  return (
    <section className="mb-10 border-t  border-zinc-100 dark:border-zinc-800 py-7  slide-top-2500">
      <div className="flex items-center space-x-2">
        <Heading>Testimonials</Heading>
        <p className="text-zinc-600">
          ( You can check the reviews from{" "}
          <Link
            className="text-blue-400 font-bold"
            href="https://mostaql.com/u/Mansour_theonly/reviews"
            target="_blank"
          >
            here
          </Link>{" "}
          )
        </p>
      </div>
      <h1 className="text-2xl md:text-5xl font-bold my-4 text-zinc-900 dark:text-white">
        What{" "}
        <span className="dark:text-zinc-400  text-indigo-500 font-extrabold">
          People Say
        </span>
      </h1>

      <div className="relative">
        {data.length != count ? (
          <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-white/100   dark:from-[#121212]/80 to-transparent flex justify-center items-end z-[999]">
            <span
              onClick={() => setCount(9)}
              className="bg-indigo-500 dark:text-zinc-900 dark:bg-white text-white capitalize font-semibold px-4 py-2 cursor-pointer rounded-lg mb-[-15px]"
            >
              show more
            </span>
          </div>
        ) : (
          ""
        )}
        <Masonry
          breakpointCols={{
            default: 3,
            1000: 2,
            700: 1,
          }}
          className="my-masonry-grid mt-10"
          columnClassName="my-masonry-grid_column"
        >
          {data.slice(0, count).map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Testimonials;
