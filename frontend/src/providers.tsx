import { ChakraProvider } from "@chakra-ui/react"
import { system } from "@chakra-ui/react/preset"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const queryClient = new QueryClient()
export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
      {children}
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
