// EventHighlight.tsx
import React from "react";

interface EventHighlightProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  className?: string;
}

const EventHighlight: React.FC<EventHighlightProps> = ({
  imageSrc,
  altText,
  title,
  description,
  className,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <img
        src={imageSrc}
        alt={altText}
        className={`w-[229px] h-[280px] mb-4 ${className}`}
      />
      <h3 className="text-xl font-bold text-white mb-2 object-cover">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default EventHighlight;
