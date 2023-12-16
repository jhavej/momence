import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ExchangeRates } from "./components/exchange-rates";
import { Container } from "./ui/container";
import { StyledH1 } from "./ui/heading";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <StyledH1>Tech Task | Momence & Jakub Havej</StyledH1>
        <ExchangeRates />
        <ReactQueryDevtools initialIsOpen={false} />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
