import "./SubmitBtn.css";

function Submit({ onSubmit }) {
  return (
    <button type="button" className="submit" onClick={onSubmit}>
      SUBMIT
    </button>
  );
}

export default Submit;
