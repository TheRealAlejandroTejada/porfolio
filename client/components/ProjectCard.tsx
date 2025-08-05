import { Link } from "react-router-dom";
import { useState } from "react";

interface ProjectCardProps {
  title1: string;
  title2: string;
  description: string;
  showcaseId: string;
  image: string;
}

export function ProjectCard({
  title1,
  title2,
  description,
  showcaseId,
  image,
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      to={`/showcase/${showcaseId}`}
      className="flex flex-col w-full max-w-[1200px] mx-auto group cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[504px] rounded-[40px] mb-2 overflow-hidden group-hover:scale-[1.02] transition-all duration-500 ease-out shadow-lg group-hover:shadow-2xl">
        <img
          src={image}
          alt={`${title1} ${title2}`}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-110`}
          onLoad={() => setIsLoaded(true)}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 text-black font-semibold shadow-lg">
              View Showcase →
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-3 max-w-[555px] transform group-hover:translate-y-[-2px] transition-transform duration-300">
        {/* Titles */}
        <div className="flex items-center gap-6">
          <h3 className="text-black text-2xl font-medium group-hover:text-gray-700 transition-colors duration-200">
            {title1}
          </h3>
          <h3 className="text-black text-2xl font-medium group-hover:text-gray-700 transition-colors duration-200">
            {title2}
          </h3>
        </div>

        {/* Description */}
        <p className="text-black text-base font-normal opacity-80 leading-normal group-hover:opacity-60 transition-all duration-200">
          {description}
        </p>

        {/* Showcase Link */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-black text-base font-medium group-hover:text-gray-700 transition-colors duration-200">
            View Showcase
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-2 transition-transform duration-300"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
