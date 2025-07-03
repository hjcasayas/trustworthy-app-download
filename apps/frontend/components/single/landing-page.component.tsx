"use client";

import { landingPageQuery } from "@/graphql/landing-page/landing-page.query";
import { LandingPageSingle } from "./landing-page.interface";
import { useReactQuery } from "@/hooks/use-react-query.hook";
import { BlockRenderer } from "../blocks-renderer/blocks-renderer.component";
import { SidebarBlockComponent } from "../blocks/sidebar/sidebar.component";
import { CommonFooterComponent } from "../common/footer/footer.component";

export const LandingPageComponent = () => {
  const { data, isLoading, isError } = useReactQuery<{
    landingPage: LandingPageSingle;
  }>({
    queryKeys: ["landingPage"],
    gqlQuery: landingPageQuery,
  });

  if (data == null || data.landingPage == null || isError || isLoading) {
    return null;
  }

  return (
    <div className="desktop:flex-row desktop:justify-center flex flex-col">
      <SidebarBlockComponent {...data.landingPage.sidebar} />
      <main>
        <BlockRenderer blocks={data.landingPage.blocks} />
        <CommonFooterComponent {...data.landingPage.footer} />
      </main>
    </div>
  );
};
