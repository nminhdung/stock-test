import React from "react";

const watchList = [
  {
    id: 1,
    title: "Spotify",
    image: "/images/spotify.png",
  },
  {
    id: 2,
    title: "Airbnb",
    image: "/images/airbnb.png",
  },
  {
    id: 3,
    title: "Shopify",
    image: "/images/shopify.png",
  },
  {
    id: 4,
    title: "PlayStation",
    image: "/images/playstation.png",
  },
  {
    id: 5,
    title: "Dropbox",
    image: "/images/dropbox.png",
  },

  {
    id: 6,
    title: "Paypal",
    image: "/images/paypal.png",
  },
];
const MyWatchList = ({ changeLayout }) => {
  return (
    <div
      className={`w-full ${
        changeLayout === "horizontal" ? "" : "grid md:grid-cols-3 gap-4"
      }`}
    >
      {watchList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex mt-10 justify-between items-center pb-8 border-b-2   "
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-[60px] h-[60px] object-cover"
              />
              <div className="">
                <h1 className="font-semibold text-xl">{item.title}</h1>
                <span className="text-[12px]">{item.title}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-[18px]">$310,40</h2>
              <span className="text-red-500 text-[14px]">-1,10%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyWatchList;
