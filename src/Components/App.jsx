import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import { useState } from "react";
export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedback;
  const updateFeedback = (option) => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  const totalFeedback = good + neutral + bad;
  console.log(totalFeedback);

  const resetFeedback = () => {
    setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,  
    });
  }
  return (
    <>
      <Description />
      <Options onclickType={updateFeedback} options={feedback} onReset={resetFeedback} total={totalFeedback}/>
{totalFeedback> 0 ?  <Feedback options={feedback} total={totalFeedback}/> :
      <Notification/>}
     
    </>
  );
}

