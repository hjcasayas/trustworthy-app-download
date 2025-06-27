import { useQuery } from "@tanstack/react-query";
import { graphqlRequest } from "@/graphql/graphql-request";

export const useReactQuery = <TData = unknown, TVariables = never>({
  queryKeys,
  gqlQuery,
  variables,
}: {
  queryKeys: string[];
  gqlQuery: string;
  variables?: TVariables;
}) => {
  return useQuery<TData>({
    queryKey: queryKeys,
    queryFn: () => graphqlRequest<TData, TVariables>(gqlQuery, variables),
  });
};
