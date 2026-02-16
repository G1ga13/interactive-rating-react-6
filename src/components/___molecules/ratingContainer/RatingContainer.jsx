import "./RatingContainer.css";
import Star from "../../___atoms/star/Star";
import Text from "../../___atoms/ratingText/text";
import Rating from "../../___atoms/ratingPool/RatingPool";
import Submit from "../../___atoms/buttons/submitButton/SubmitBtn";

function RatingBox({ selected, setSelected, onSubmit }) {
  return (
    <div className="rating_container">
      <Star />
      <Text />
      <Rating selected={selected} setSelected={setSelected} />
      <Submit onSubmit={onSubmit} />
    </div>
  );
}

export default RatingBox;
