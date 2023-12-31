import express, {
  json,
  NextFunction,
  Request,
  Response,
} from "express";

const app = express();

app.use(json());

type AsyncHandlerFunction<T> = (
  req: Request,
  res: Response<T>,
  next: NextFunction
) => Promise<unknown>;

const asyncHandler =
  <T>(fn: AsyncHandlerFunction<T>) =>
  (req: Request, res: Response<T>, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

const fetchExchangeRates = async () => {
  const response = await fetch(
    "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.text();
  return data;
};

app.get(
  "/api/exchangeRates",
  asyncHandler<string>(async (_, res) => {
    const response = await fetchExchangeRates();

    if (process.env.NODE_ENV === "development") {
      res.set({
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET",
      });
    }

    return res.send(response);
  })
);

app.listen(3001);
