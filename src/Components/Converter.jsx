import React from "react";

const Converter = () => {
  return (
    <section className="flex flex-col bg-gray-200 h-4/5 w-1/4 rounded-2xl justify-between p-3 items-center ">
      <h2 className="text-center font-bold text-3xl mt-4 text-blue-600">
        Currency Converter
      </h2>
      <div className="input&&btn w-3/4 flex flex-col gap-5">
        <div className="fromCurrency flex flex-col ">
          <label htmlFor="fromCurrency" className="text-lg my-2">
            From
          </label>
          <select
            name="fromCurrency"
            id="fromCurrency"
            className=" text-lg p-3 bg-gray-300 rounded-lg"
          >
            <option value="inr">INR</option>
          </select>
        </div>

        <div className="toCurrency flex flex-col">
          <label htmlFor="toCurrency" className="text-lg my-2">
            To
          </label>
          <select
            name="toCurrency"
            id="toCurrency"
            className=" text-lg p-3 bg-gray-300 rounded-lg"
          >
            <option value="usd">USD</option>
          </select>
        </div>
        <input
          type="text"
          className="Amount bg-gray-300 p-3 focus:outline-none rounded-lg my-5"
          placeholder="Amount"
        />
      </div>
      <div className="btn-result flex flex-col items-center gap-5">
        <button className="bg-green-600 font-bold text-white p-3 rounded-lg cursor-pointer">
          Convert {"INR"} to {"USD"}
        </button>
        <span className="Result text-lg">
          <span>Result: </span>
          <span>{35}</span>
        </span>
      </div>
    </section>
  );
};

export default Converter;
