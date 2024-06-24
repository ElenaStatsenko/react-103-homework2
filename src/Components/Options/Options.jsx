export default function Options({ onclickType, options, onReset,total}) {
 
 const keyOptions= Object.keys(options);

  return (
    <div>
      {keyOptions.map((keyOption, index) => (
        <button key={index} onClick={() => onclickType(keyOption)}>
          {keyOption}
        </button>))}
        {total>0 && (
        <button onClick={onReset}>Reset</button>
      )}

    </div>
  );
}
