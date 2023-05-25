import { useState } from "react";
import EditIcon from "../../assets/edit-pencil.svg";
import MasterCardIcon from "../../assets/mc_symbol.svg";
import ApproveBadgeIcon from "../../assets/verified-badge.svg";

function CardNumber() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/[^0-9]/g, "") // Remove non-numeric characters
      .slice(0, 16); // Limit input to 12 characters

    const groups = formattedValue.match(/.{1,4}/g); // Divide into groups of 4

    if (groups) {
      const formattedInput = groups.join("-");
      setInputValue(formattedInput);
    } else {
      setInputValue("");
    }
  };
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">Card Number</h4>
          <p className="text-gray-400 text-sm">
            Enter the 16-digit card number on the card
          </p>
        </div>
        <button className="flex items-center gap-x-2 font-medium text-primary text-[16px]">
          <img src={EditIcon} width={15} alt="" />
          <p>Edit</p>
        </button>
      </div>
      <div className="relative w-full mt-4">
        <img
          src={MasterCardIcon}
          alt=""
          className="w-12 absolute left-5 top-3"
        />
        <input
          type="text"
          required
          value={inputValue}
          onChange={handleChange}
          className="w-full h-16 rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-primary valid:border-primary valid:border-2 duration-500 px-20 text-xl font-medium text-gray-500"
        />
        <img
          src={ApproveBadgeIcon}
          alt=""
          className="w-5 absolute right-5 top-5"
        />
      </div>
    </div>
  );
}

export default CardNumber;
