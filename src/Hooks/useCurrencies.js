import { useEffect, useState } from "react";

export function useCurrencies(apiURL) {
  const [currencyTypes, setCurrencyTypes] = useState({});
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then(setCurrencyTypes);
  }, [apiURL]);
  return currencyTypes;
}
