import { useEffect, useState } from "react";

const Converter = () => {
  const allCurrencyAPI =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";

  const currencyValueAPI =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState();
  const [currencyTypes, setCurrencyTypes] = useState([]);
  const [specificCurVal, setSpecificCurVal] = useState([]);
  const [result, setResult] = useState(0);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleConvertBtnClick = () => {
    getCurrencyValue();
  };

  if (amount === "") return;

  useEffect(() => {
    if (
      specificCurVal &&
      fromCurrency &&
      toCurrency &&
      amount &&
      specificCurVal[fromCurrency] &&
      specificCurVal[fromCurrency][toCurrency]
    ) {
      const value = specificCurVal[fromCurrency][toCurrency];
      setResult(amount * value);
    }
  }, [specificCurVal]);

  const getAllCurrencies = async () => {
    const res = await fetch(allCurrencyAPI);
    const data = await res.json();
    setCurrencyTypes(data);
  };

  useEffect(() => {
    getAllCurrencies();
  }, []);

  const getCurrencyValue = async () => {
    const res = await fetch(currencyValueAPI + `/${fromCurrency}.json`);
    const data = await res.json();
    setSpecificCurVal(data);
  };

  return (
    <section className="flex flex-col bg-zinc-200 h-4/5 w-1/4 rounded-2xl justify-between p-3 items-center ">
      <h2 className="text-center font-bold text-3xl mt-4 text-blue-600">
        Currency Converter
      </h2>
      <div className="input&&btn w-3/4 flex flex-col gap-5">
        <div className="fromCurrency flex flex-col ">
          <label
            htmlFor="fromCurrency"
            className="text-lg font-extralight my-2"
          >
            From
          </label>
          <select
            name="fromCurrency"
            id="fromCurrency"
            className=" text-lg p-3 bg-gray-300 rounded-lg"
            onChange={handleFromCurrencyChange}
          >
            {currencyTypes &&
              Object.keys(currencyTypes).map((cur) => (
                <option value={cur} key={cur}>
                  {cur} - {currencyTypes[cur]}
                </option>
              ))}
          </select>
        </div>

        <div className="toCurrency flex flex-col">
          <label htmlFor="toCurrency" className="text-lg font-extralight my-2">
            To
          </label>
          <select
            name="toCurrency"
            id="toCurrency"
            className=" text-lg p-3 bg-gray-300 rounded-lg"
            onChange={handleToCurrencyChange}
          >
            {currencyTypes &&
              Object.keys(currencyTypes).map((cur) => (
                <option value={cur} key={cur}>
                  {cur} - {currencyTypes[cur]}
                </option>
              ))}
          </select>
        </div>
        <input
          type="text"
          className="Amount bg-gray-300 p-3 focus:outline-none rounded-lg my-5"
          placeholder="Amount"
          onChange={handleAmountChange}
          value={amount}
        />
      </div>
      <div className="btn-result flex flex-col items-center gap-5">
        <button
          className="bg-red-500 font-bold text-white p-3 rounded-lg cursor-pointer"
          onClick={handleConvertBtnClick}
        >
          Convert {fromCurrency} to {toCurrency}
        </button>
        <span className="Result text-lg flex flex-col">
          {/* <span>Result: </span> */}
          <input
            type="text"
            value={Number(result.toFixed(2))}
            className="bg-green-300 p-3 focus:outline-none rounded-lg text-center my-5"
            readOnly
          />
        </span>
      </div>
    </section>
  );
};

export default Converter;
