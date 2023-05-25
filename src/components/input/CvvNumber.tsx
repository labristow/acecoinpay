import { useState } from "react";
import DottedIcon from "../../assets/dots.svg";

function CvvNumber() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value
    .replace(/[^0-9]/g, "") // Remove non-numeric characters
    .slice(0, 4); // Limit input to 12 characters
    setInputValue(formattedValue);
  };
  return (
    <div className="mt-10 grid grid-col-1 md:grid-cols-2">
      <div className="w-full">
        <h4 className="text-lg font-semibold">CVV Number</h4>
        <p className="text-gray-400 text-sm">
          Enter the 3 or 4 digit number on the card
        </p>
      </div>
      <div className="relative w-full">
        <input
          value={inputValue}
          onChange={handleChange}
          required
          type="text"
          className="w-full h-16 text-center rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-primary valid:border-primary valid:border-2 duration-500 px-20 text-xl font-medium text-gray-500"
        />
        <img src={DottedIcon} alt="" className="w-5 absolute right-5 top-5" />
      </div>
    </div>
  );
}

export default CvvNumber;
