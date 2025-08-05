import React from "react";

const Courselist = () => {
  return (
    <>
      <div className=" md:flex lg:flex grid-rows-3 overflow-scroll lg gap-4 p-3 mx-2 my-3">
        {courses.map((e) => (
          <div className="  shrink-0 grow-0 bg-white border rounded-lg shadow-sm hover:shadow-md p-3 mb-3 blocks  transition-transform duration-250 ease-in-out hover:scale-105 ">
            {/* Thumbnail */}
            <img
              src="image.png"
              alt="Course thumbnail"
              className="w-full h-40 object-fill rounded-md"
            />

            {/* Course Info */}
            <div className="mt-2">
              <h2 className="font-bold text-lg leading-5 text-gray-900 line-clamp-2">
                Complete Data Science, Machine...
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Krish Naik, KRISHAI Technologies Private...
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1 text-sm">
                <span className="font-semibold text-yellow-600">4.5</span>
                <span className="flex gap-0.5 text-yellow-400">★ ★ ★ ★ ★</span>
                <span className="text-gray-600 text-xs">(16,311)</span>
              </div>

              {/* Pricing */}
              <div className="mt-1">
                <span className="font-bold text-lg">₹479</span>{" "}
                <span className="text-gray-500 line-through text-sm">
                  ₹3,279
                </span>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mt-2 p-1">
                <button className="text-md bg-green-700 hover:bg-green-800 text-white px-2 py-0.5 rounded font-semibold p-2 hover:shadow-md">
                  Purchase
                </button>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">
                  Bestseller
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courselist;
const courses = [
  {
    link: "/image.png",
    title: "test",
    text: "test",
  },
  {
    link: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "test",
    text: "test",
  },
  {
    link: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "test",
    text: "test",
  },
  {
    link: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "test",
    text: "test",
  },
  {
    link: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "test",
    text: "test",
  },
  {
    link: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "test",
    text: "test",
  },
  {
    link: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "test",
    text: "test",
  },
];
