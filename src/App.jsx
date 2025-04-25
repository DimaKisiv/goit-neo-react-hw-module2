import { useEffect, useState } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

const emptyFeedbackModel = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const feedbacksStorageData = localStorage.getItem("feedbacks");
    return feedbacksStorageData
      ? JSON.parse(feedbacksStorageData)
      : emptyFeedbackModel;
  });

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbacks(emptyFeedbackModel);
    } else {
      setFeedbacks({
        ...feedbacks,
        [feedbackType]: feedbacks[feedbackType] + 1,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options feedbackClick={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbacks={feedbacks}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
