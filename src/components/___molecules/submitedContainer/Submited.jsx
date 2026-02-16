import "./Submited.css";
import Payment from "../../../assets/images/OnlinePayment.png";
import SelectedText from "../../___atoms/selectedNumber/SelectedText.jsx";
import Final from "../../___atoms/finalText/FinalText";

function Submited({ selected }) {
  return (
    <div className="sub_container">
      <img src={Payment} alt="" />
      <SelectedText selected={selected} />
      <Final />
    </div>
  );
}

export default Submited;
