import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, onClick }) => {
  return (
    <div
      className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:blur-sm"
      />
      {/* Overlay for description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
        <h3 className="text-white text-lg font-bold mb-2 drop-shadow">
          {title}
        </h3>
        <p className="text-white text-sm text-center px-4 drop-shadow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
