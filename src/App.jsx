import { useState } from "react";
import ExpensiveCalculationComponent from "./components/ExpensiveCalculationComponent";
import "./App.css";

function App() {
  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange1 = (event) => {
    setUserInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setUserInput2(event.target.value);
  };

  const handleAddData = () => {
    const parsedData = [Number(userInput1), Number(userInput2)];
    setData(parsedData);
  };

  const handleReset = () => {
    setUserInput1("");
    setUserInput2("");
    setData([]);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="input1" className="sr-only">
            Primer valor
          </label>
          <input
            type="text"
            id="input1"
            value={userInput1}
            onChange={handleInputChange1}
            className="p-2 border border-gray-300 rounded-md w-24 text-center"
          />
          <span className="mx-2">+</span>
          <label htmlFor="input2" className="sr-only">
            Segundo valor
          </label>
          <input
            type="text"
            id="input2"
            value={userInput2}
            onChange={handleInputChange2}
            className="p-2 border border-gray-300 rounded-md w-24 text-center"
          />
        </div>

        <ExpensiveCalculationComponent data={data} />
        <div className="flex justify-between">
          <button
            onClick={handleAddData}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Resultado
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Resetear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
