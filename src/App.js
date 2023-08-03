import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";
import { useState } from "react";
function App() {
  const [InvestmentData, setInvestmentData] = useState();
  let currentSav='';
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];

    currentSav=currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setInvestmentData(yearlyData);

    // do something with yearlyData ...
  };
  return (
    <div>
      <Header />
      <Form  onTrigger={calculateHandler}/>
      {!InvestmentData && <p>No investment data</p>}
     { InvestmentData && <Table  items={InvestmentData} initialInvestment={currentSav}/>}
    </div>
  );
}

export default App;
