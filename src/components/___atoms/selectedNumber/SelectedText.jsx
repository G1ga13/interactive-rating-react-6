import "./SelectedText.css";

function SelectedText({ selected }) {
  return (
    <div className="selectedText">
      <p>You selected {selected} out of 5</p>
    </div>
  );
}

export default SelectedText;
