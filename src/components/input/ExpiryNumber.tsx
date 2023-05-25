import React, { useState } from "react";

function ExpiryNumber() {
  const [date, setDate] = useState({
    month: "",
    year: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const formattedValue = value
      .replace(/[^0-9]/g, "") // Remove non-numeric characters
      .slice(0, 2); // Limit input to 12 characters
    setDate({
      ...date,
      [name]: formattedValue,
    });
  };
  return (
    <div className="mt-10 grid grid-col-1 md:grid-cols-2">
      <div className="w-full">
        <h4 className="text-lg font-semibold">Expiry Date</h4>
        <p className="text-gray-400 text-sm">
          Enter expiration date of the card
        </p>
      </div>
      <div className="relative w-full flex items-center justify-between gap-x-3">
        <input
          required
          name="month"
          value={date.month}
          onChange={handleChange}
          type="text"
          className="w-full h-16 text-center rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-primary valid:border-primary valid:border-2 duration-500 text-xl font-medium text-gray-500"
        />
        <span className="text-lg font-medium">/</span>
        <input
          required
          name="year"
          value={date.year}
          onChange={handleChange}
          type="text"
          className="w-full h-16 text-center rounded-lg border border-gray-300 outline-none focus:border-2 focus:border-primary valid:border-primary valid:border-2 duration-500 text-xl font-medium text-gray-500"
        />
      </div>
    </div>
  );
}

export default ExpiryNumber;
