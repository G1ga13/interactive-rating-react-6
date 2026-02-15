import "./Star.css";
import starimg from "../../../assets/images/star.svg";

function Star() {
  return (
    <div className="star_box">
      <img src={starimg} alt="star" />
    </div>
  );
}

export default Star;
