import "./RatingBtn.css";

function RatingBtn(props) {
  let className = "rating_circle";

  if (props.selected === props.number) {
    className = "rating_circle active";
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => props.onSelect(props.number)}
    >
      {props.number}
    </button>
  );
}

export default RatingBtn;
