export default function Feedback({total, options:{ good, neutral, bad }}) {
    return (
      <div>
        <ul>
     <li>Good:{good}</li>
     <li>Neutral:{neutral}</li>
     <li>Bad:{bad}</li>
     <li>TotalFeedback:{total}</li>
     <li>Positive:{Math.round((good / total) * 100)}%</li>
     </ul>

      </div>
     
    );
  }