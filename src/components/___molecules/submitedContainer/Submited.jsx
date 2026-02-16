import "./Submited.css";
import Payment from "../../../assets/images/OnlinePayment.png";
import SelectedText from "../../___atoms/selectedNumber/selectedText";
import Final from "../../___atoms/finalText/FinalText";

function Submited() {
  return (
    <div className="sub_container">
      <img src={Payment} alt="" />
      <SelectedText />
      <Final />
    </div>
  );
}

export default Submited;
