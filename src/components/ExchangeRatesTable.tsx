import type * as z from "zod";
import { type exchangeRatesSchema } from "@/lib/validations/exchange-rates";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface ExchangeRatesTableProps {
  exchangeRates: z.infer<typeof exchangeRatesSchema>;
}

export const ExchangeRatesTable = ({
  exchangeRates,
}: ExchangeRatesTableProps) => {
  const { date, rates } = exchangeRates;

  return (
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
  );
};
