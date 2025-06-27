import { QueryClientProviderProps } from "@tanstack/react-query";

import { ReactQueryProvider } from "./react-query/react-query.provider";

export type ProvidersProps = Omit<QueryClientProviderProps, "client">;

export const Providers = ({ children }: ProvidersProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
