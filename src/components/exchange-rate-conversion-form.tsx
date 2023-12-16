import { useState } from "react";
import { WithExchangeRates } from "../types";
import { StyledField } from "../ui/form/field";
import { StyledInput } from "../ui/form/input";
import { StyledLabel } from "../ui/form/label";
import { StyledSelect } from "../ui/form/select";
import { StyledH2 } from "../ui/heading";
import { StyledForm, StyledResult } from "./styled";

interface PositiveDecimalInputProps {
  value: string;
  placeholder: string;
  onChange: (newValue: string) => void;
}

const PositiveDecimalInput: React.FC<PositiveDecimalInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^[0-9]*\.?[0-9]*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export const ExchangeRateConversionForm = ({
  exchangeRates,
}: WithExchangeRates) => {
  const { rates } = exchangeRates;

  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(rates[0]);
  const [result, setResult] = useState("");

  const handleAmountChange = (newAmount: string) => {
    setAmount(newAmount);
    handleConversion(newAmount, selectedCurrency);
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSelectedCurrency = rates.find(
      ({ code }) => code === event.target.value
    );
    if (newSelectedCurrency) {
      setSelectedCurrency(newSelectedCurrency);
      handleConversion(amount, newSelectedCurrency);
    }
  };

  const handleConversion = (a: string, currency: typeof selectedCurrency) => {
    const parsedAmount = parseFloat(a);
    const conversionRate = currency.rate / currency.amount;
    setResult((parsedAmount / conversionRate).toFixed(2));
  };

  return (
    <div>
      <StyledH2>Conversion Form</StyledH2>
      <StyledForm>
        <StyledField>
          <StyledLabel>Amount in CZK</StyledLabel>
          <PositiveDecimalInput
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </StyledField>
        <StyledField>
          <StyledLabel>Target currency</StyledLabel>
          <StyledSelect
            value={selectedCurrency.code}
            onChange={handleCurrencyChange}
          >
            {rates.map(({ code, currency }) => (
              <option key={code} value={code}>
                {code} ({currency})
              </option>
            ))}
          </StyledSelect>
        </StyledField>
      </StyledForm>

      <StyledResult>
        {Boolean(amount) && (
          <>
            {amount} CZK = {result} {selectedCurrency.code}
          </>
        )}
      </StyledResult>
    </div>
  );
};
