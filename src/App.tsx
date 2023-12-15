import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Rates } from "./components/ExchangeRates";
import { Container } from "./ui/container";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Rates />
        <ReactQueryDevtools initialIsOpen={false} />
      </Container>
    </QueryClientProvider>
  );
};

export default App;
