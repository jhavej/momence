import { parse } from "date-fns";
import * as z from "zod";
import { exchangeRatesSchema } from "./validations/exchange-rates";

export const parseExchangeRates = (data: string) => {
  try {
    const lines = data.split("\n");
    const dateLine = lines[0];
    const exchangeRateLines = lines.slice(2, lines.length - 1);

    const dateMatch = /(?:\d+\s\w+\s\d{4})/.exec(dateLine);
    const dateString = dateMatch ? dateMatch[0] : null;
    const date = dateString
      ? parse(dateString, "dd MMM yyyy", new Date())
      : null;

    const rates = exchangeRateLines.map((line) => {
      const [country, currency, amount, code, rate] = line.split("|");
      return {
        country: country.trim(),
        currency: currency.trim(),
        amount: parseInt(amount),
        code: code.trim(),
        rate: parseFloat(rate),
      };
    });

    const exchangeRates = {
      date,
      rates,
    };

    return exchangeRatesSchema.parse(exchangeRates);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(error.message);
    }
    return null;
  }
};
