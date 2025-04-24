import css from "./Feedback.module.css";

export default function Feedback({ feedbacks, total, positive }) {
  return (
    <div className={css.feedback}>
      <div>Good: {feedbacks.good}</div>
      <div>Neutral: {feedbacks.neutral}</div>
      <div>Bad: {feedbacks.bad}</div>
      <div>Total: {total}</div>
      <div>Positive: {positive}%</div>
    </div>
  );
}
