import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './components/shared/Router';
import React from 'react';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
