import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("");
      setResult(null);
    } else if (value === "=") {
      try {
        setResult(eval(display)); // Avoid using eval in production!
      } catch {
        setResult("Error");
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  const buttons = [
    { label: "7", type: "default" },
    { label: "8", type: "default" },
    { label: "9", type: "default" },
    { label: "/", type: "operator" },
    { label: "4", type: "default" },
    { label: "5", type: "default" },
    { label: "6", type: "default" },
    { label: "*", type: "operator" },
    { label: "1", type: "default" },
    { label: "2", type: "default" },
    { label: "3", type: "default" },
    { label: "-", type: "operator" },
    { label: "0", type: "default" },
    { label: ".", type: "default" },
    { label: "+", type: "operator" },
    { label: "=", type: "operator" },
    { label: "C", type: "functional" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gray-100 bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-6 w-80">
        {/* Display */}
        <div className="text-right text-4xl mb-4 p-4 bg-gray-900 rounded-lg shadow-inner">
          {result !== null ? result : display || "0"}
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map(({ label, type }) => (
            <Button
              key={label}
              label={label}
              type={type}
              onClick={() => handleButtonClick(label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
