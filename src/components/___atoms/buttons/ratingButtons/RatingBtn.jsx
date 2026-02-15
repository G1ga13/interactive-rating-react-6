import "./RatingBtn.css";

function RatingBtn(props) {
  return <button className="rating_circle">{props.number}</button>;
}

export default RatingBtn;
