import "./RatingPool.css";
import RatingBtn from "../buttons/ratingButtons/RatingBtn";

function Rating() {
  return (
    <div className="rating_pool">
      <RatingBtn number={1} />
      <RatingBtn number={2} />
      <RatingBtn number={3} />
      <RatingBtn number={4} />
      <RatingBtn number={5} />
    </div>
  );
}

export default Rating;
