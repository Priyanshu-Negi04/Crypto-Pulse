import { createContext, useEffect, useState } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({ name: "usd", symbol: "$", });

  const fetchAllCoin = async () => {
    const apiKey = import.meta.env.VITE_COIN_API_KEY;
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey }
    };

    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options);
      const data = await res.json();
      // console.log(data);
      setAllCoin(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const ContextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={ContextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
