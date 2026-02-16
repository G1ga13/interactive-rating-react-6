import "./Main.css";
import RatingBox from "../___molecules/RatingContainer/RatingContainer";
import Submited from "../___molecules/submitedContainer/Submited";

function Main() {
  return (
    <>
      <div className="first_container">
        <RatingBox />
      </div>
      <div className="second_container">
        <Submited />
      </div>
    </>
  );
}

export default Main;
