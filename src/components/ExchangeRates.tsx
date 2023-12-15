import { useQuery } from "react-query";
import { parseExchangeRates } from "../lib/utils";
import { ExchangeRatesTable } from "./ExchangeRatesTable";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3001";

const apiEndpoint = "/api/exchangeRates";

export const Rates = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["exchangeRates"],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}${apiEndpoint}`);

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
