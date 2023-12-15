import * as z from "zod";

export const exchangeRatesSchema = z.object({
  date: z.date(),
  rates: z.array(
    z.object({
      country: z.string(),
      currency: z.string(),
      amount: z.number(),
      code: z.string().length(3),
      value: z.number(),
    })
  ),
});
