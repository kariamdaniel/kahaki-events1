import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  total?: number;
  size?: number;
  value: number;
  onChange: (rating: number) => void;
}

export function StarRating({
  total = 5,
  size = 32,
  value,
  onChange
}: StarRatingProps) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-2 my-2">
      {[...Array(total)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={index}
            className={`cursor-pointer transition-all duration-200 transform hover:scale-110 ${
              ratingValue <= (hover || value)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            onClick={() => onChange(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            <Star 
              size={size} 
              fill={ratingValue <= (hover || value) ? "currentColor" : "none"} 
              strokeWidth={2}
            />
          </button>
        );
      })}
    </div>
  );
}
