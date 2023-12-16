import { useQuery } from "react-query";
import { parseExchangeRates } from "../lib/utils";
import { FlexColumn } from "../ui/layout";
import { StyledSpinner } from "../ui/spinner";
import { ExchangeRateConversionForm } from "./exchange-rate-conversion-form";
import { ExchangeRatesTable } from "./exchanger-rates-table";

export const ExchangeRates = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["exchangeRates"],
    queryFn: async () => {
      const response = await fetch(
        process.env.NODE_ENV === "development"
          ? "http://localhost:3001/api/exchangeRates"
          : "/api/exchangeRates"
      );

      if (!response.ok) {
        throw new Error("API response not ok");
      }
      const rawExchangeRates = await response.text();
      return parseExchangeRates(rawExchangeRates);
    },
  });

  if (isLoading) {
    return <StyledSpinner />;
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
