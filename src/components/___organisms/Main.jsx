import "./Main.css";
import RatingBox from "../___molecules/ratingContainer/RatingContainer.jsx";
import Submited from "../___molecules/submitedContainer/Submited";
import { useState } from "react";

function Main() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
  }

  return (
    <>
      {!submitted && (
        <div className="first_container">
          <RatingBox
            selected={selected}
            setSelected={setSelected}
            onSubmit={handleSubmit}
          />
        </div>
      )}

      {submitted && (
        <div className="second_container">
          <Submited selected={selected} />
        </div>
      )}
    </>
  );
}

export default Main;
