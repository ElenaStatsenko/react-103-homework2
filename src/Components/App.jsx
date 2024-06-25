import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState, useEffect } from "react";

const initialObject = {
  // начальный стейт
  good: 0,
  neutral: 0,
  bad: 0,
};

const getLocalStorageData = () => {
  const savedFeedback = JSON.parse(localStorage.getItem("saved-feedback"));

  
  if (savedFeedback !== null) {
    return savedFeedback;
  }
  return initialObject;
};

export default function App() {
  const [feedback, setFeedback] = useState(getLocalStorageData);

  console.log(useState(initialObject));

  const { good, neutral, bad } = feedback;

  const updateFeedback = (option) => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  const totalFeedback = good + neutral + bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        onclickType={updateFeedback}
        options={feedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback options={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
