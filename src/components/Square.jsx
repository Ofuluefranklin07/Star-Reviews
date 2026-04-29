export default function StarRating({ num, rating, onRating }) {
  const isFilled = num <= rating;

  return (
    <button
      className={`star ${isFilled ? 'filled' : 'empty'}`}
      onClick={() => onRating(num)}
      aria-label={`Rate ${num} star${num !== 1 ? 's' : ''}`}
      title={`Rate ${num} star${num !== 1 ? 's' : ''}`}
    >
      ★
    </button>
  );
}