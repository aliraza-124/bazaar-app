import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";
import AppRoutes from "./routes";

function App() {
  // const MOUNT_NODE = document.getElementById('root');
  const queryClient = new QueryClient();
  return (
    <>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
