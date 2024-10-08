"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface ProvidersProps{
  children: React.ReactNode;
}

const queryClient = new QueryClient();
const Providers = ({children}: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers;
