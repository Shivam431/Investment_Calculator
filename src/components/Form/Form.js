import { useState } from "react";

function Form(props) {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const onSavingChange = (event) => {
    setCurrentSavings(event.target.value);
  };

  const onYearlySavingChange = (event) => {
    setYearlySavings(event.target.value);
  };

  const onReturnChange = (event) => {
    setExpectedReturn(event.target.value);
  };

  const onDurationChange = (event) => {
    setDuration(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
        const userInput = 
      { currentSavings, yearlySavings, expectedReturn, duration };
    props.onTrigger(userInput);
  };

  const onResetButton = (event) => {
    console.log("reset clicked");
    setCurrentSavings("");
    setYearlySavings("");
    setExpectedReturn("");
    setDuration("");
  };
  return (
    <div>
      <form className="form" onSubmit={onFormSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={onSavingChange}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={onYearlySavingChange}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={onReturnChange}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={onDurationChange} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onResetButton}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default Form;
