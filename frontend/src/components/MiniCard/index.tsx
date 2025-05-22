import React from 'react';

interface MiniCardProps {
  image: string;
  title: string;
  description: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ image, title, description }) => {
  return (
    <div className="relative w-full aspect-[5/2] rounded-lg overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-bold mb-1 drop-shadow">
          {title}
        </h3>
        <p className="text-white text-sm drop-shadow">{description}</p>
      </div>
    </div>
  );
};

export default MiniCard;
