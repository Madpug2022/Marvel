import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./styles/global.scss";
import router from "./routes/router";
import { MainProvider } from "./contexts/MainContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </MainProvider>
    </QueryClientProvider>
  );
}

export default App;
