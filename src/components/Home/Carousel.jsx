import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    title: "Slide 1 Title",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/800x300?text=Slide+2",
    title: "Slide 2 Title",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x300?text=Slide+3",
    title: "Slide 3 Title",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-full p-2  mx-auto overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-1/3 flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white bg-black/60 p-2 rounded">
              {slide.title}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
