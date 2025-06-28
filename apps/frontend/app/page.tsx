import { LandingPageComponent } from "@/components/single/landing-page.component";
import { graphqlRequest } from "@/graphql/graphql-request";
import { landingPageQuery } from "@/graphql/landing-page/landing-page.query";
import { getQueryClient } from "@/providers/react-query/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function LandingPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["landingPage"],
    queryFn: () => graphqlRequest(landingPageQuery),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LandingPageComponent />
    </HydrationBoundary>
  );
}
