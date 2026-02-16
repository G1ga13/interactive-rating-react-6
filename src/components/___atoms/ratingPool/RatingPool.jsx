import "./RatingPool.css";
import RatingBtn from "../buttons/ratingButtons/RatingBtn";

function Rating({ selected, setSelected }) {
  return (
    <div className="rating_pool">
      <RatingBtn number={1} selected={selected} onSelect={setSelected} />
      <RatingBtn number={2} selected={selected} onSelect={setSelected} />
      <RatingBtn number={3} selected={selected} onSelect={setSelected} />
      <RatingBtn number={4} selected={selected} onSelect={setSelected} />
      <RatingBtn number={5} selected={selected} onSelect={setSelected} />
    </div>
  );
}

export default Rating;
