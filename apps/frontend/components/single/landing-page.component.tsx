"use client";

import { landingPageQuery } from "@/graphql/landing-page/landing-page.query";
import { LandingPageSingle } from "./landing-page.interface";
import { useReactQuery } from "@/hooks/use-react-query.hook";
import { BlockRenderer } from "../blocks-renderer/blocks-renderer.component";
import { SidebarBlockComponent } from "../blocks/sidebar/sidebar.component";

export const LandingPageComponent = () => {
  const { data, isLoading, isError } = useReactQuery<{
    landingPage: LandingPageSingle;
  }>({
    queryKeys: ["landingPage"],
    gqlQuery: landingPageQuery,
  });

  if (data == null) {
    return <p>No data available</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading landing page</p>;
  }

  return (
    <div className="desktop:flex-row desktop:justify-center flex flex-col">
      <SidebarBlockComponent {...data.landingPage.sidebar} />
      <BlockRenderer blocks={data.landingPage.blocks} />
    </div>
  );
};
