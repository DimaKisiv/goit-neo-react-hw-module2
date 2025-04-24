import css from "./Options.module.css";

export default function Options({ feedbackClick, totalFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => feedbackClick("good")}>Good</button>
      <button onClick={() => feedbackClick("neutral")}>Neutral</button>
      <button onClick={() => feedbackClick("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => feedbackClick("reset")}>Reset</button>
      )}
    </div>
  );
}
