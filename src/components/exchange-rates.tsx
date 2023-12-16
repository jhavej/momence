import { useQuery } from "react-query";
import { parseExchangeRates } from "../lib/utils";
import { FlexColumn } from "../ui/layout";
import { ExchangeRateConversionForm } from "./exchange-rate-conversion-form";
import { ExchangeRatesTable } from "./exchanger-rates-table";

const baseUrl = process.env.REACT_APP_VERCEL_URL
  ? `https://${process.env.REACT_APP_VERCEL_URL}`
  : "http://localhost:3001";

const apiEndpoint = "/api/exchangeRates";

export const ExchangeRates = () => {
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

  return (
    <FlexColumn>
      <ExchangeRateConversionForm exchangeRates={data} />
      <ExchangeRatesTable exchangeRates={data} />
    </FlexColumn>
  );
};
