import { useState } from "react";
import StarRating from "./components/Square";

export default function App() {
  const [rating, setRating] = useState(0);
  
  function handleRating(num) {
    setRating(num);
  }
  
  return (
    <div className="app">
      <div className="rating-container" data-rating={rating}>
        <h1>How would you rate us?</h1>
        <div className="stars-wrapper">
          {[1, 2, 3, 4, 5].map((num) => (
            <StarRating 
              num={num} 
              rating={rating} 
              onRating={handleRating} 
              key={num} 
            />
          ))}
        </div>
        <p className="rating-text">
          {rating > 0 ? `You rated us ${rating} star${rating !== 1 ? 's' : ''}!` : 'Click to rate'}
        </p>
      </div>
    </div>
  );
}
