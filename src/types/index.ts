import type * as z from "zod";
import { exchangeRatesSchema } from "../lib/validations/exchange-rates";

export interface WithExchangeRates {
  exchangeRates: z.infer<typeof exchangeRatesSchema>;
}
