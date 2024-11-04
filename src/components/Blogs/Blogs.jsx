import React from "react";
import Heading from "../Shared/Heading";

// import images 
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";



const BlogData = [
  {
    title: "How to choose the right laptop for you",
    subtitle:
      "The best laptop for you is the right one. Let's see what we can do with your laptop.",
    poblished: "Feb 20, 2022 by Dilshad",
    Image: Img1,
  },
  {
    title: "How to choose the right laptop for you",
    subtitle:
      "The best laptop for you is the right one. Let's see what we can do with your laptop.",
    poblished: "Feb 20, 2022 by Dilshad",
    Image: Img2,
  },
  {
    title: "How to choose the right laptop for you",
    subtitle:
      "The best laptop for you is the right one. Let's see what we can do with your laptop.",
    poblished: "Feb 20, 2022 by Dilshad",
    Image: Img3,
  },
];
const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/*Header section*/}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
        {/*Blog section*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/*Blog Card*/}
          {BlogData.map((data) => (
            <div key={data.title} className="bg-white dark:bg-gray-900">
              {/*image Section*/}

              <div className="overflow-hidden rounded-2xl mb-2">
                <img 
                src={data.Image} 
                alt=""
                className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/*Content Section*/}
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500">{data.poblished}</p>
                        <p className="font-bold line-clamp-1">{data.title}</p>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
                    </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
