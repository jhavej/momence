import { WithExchangeRates } from "@/types";
import { StyledH2 } from "../ui/heading";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const ExchangeRatesTable = ({ exchangeRates }: WithExchangeRates) => {
  const { date, rates } = exchangeRates;

  return (
    <div>
      <StyledH2>Conversion Rates</StyledH2>
      <Table>
        <TableCaption>{date.toDateString()}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Code</TableHead>
            <TableHead>Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rates.map(({ country, amount, code, currency, value }) => (
            <TableRow key={code}>
              <TableCell>{country}</TableCell>
              <TableCell>{currency}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{code}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
