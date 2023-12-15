import { useQuery } from "react-query";
import { parseExchangeRates } from "../lib/utils";
import { ExchangeRatesTable } from "./ExchangeRatesTable";

const corsProxy = "https://proxy.cors.sh";

const exchangeRateUrl =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export const Rates = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["exchangeRates"],
    queryFn: async () => {
      const response = await fetch(`${corsProxy}/${exchangeRateUrl}`, {
        headers: {
          "x-cors-api-key": process.env.REACT_APP_PROXY_CORS_KEY!,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const rawExchangeRates = await response.text();
      return parseExchangeRates(rawExchangeRates);
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error...</span>;
  }

  if (!data) {
    return <span>No Data...</span>;
  }

  return <ExchangeRatesTable exchangeRates={data} />;
};
