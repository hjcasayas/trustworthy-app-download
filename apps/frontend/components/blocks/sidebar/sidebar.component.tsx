import { SidebarContactLinksComponent } from "@/components/sidebar/contact-links/contact-links.component";
import { SidebarOfferingsComponent } from "@/components/sidebar/offerings/offerings.component";
import { SidebarHeadlineComponent } from "@/components/sidebar/headline/headline.component";
import { SidebarNavComponent } from "@/components/sidebar/nav/nav.component";
import { StrapiBlock } from "@/components/strapi/strapi-block";

import { SidebarBlock } from "./sidebar.interface";
export interface SidebarBlockComponentProps extends SidebarBlock, StrapiBlock {}

export const SidebarBlockComponent = ({
  website,
  cta,
  headline1,
  headline2,
  headline3,
  description,
  offerings,
  contactLinks,
}: SidebarBlockComponentProps) => {
  return (
    <aside className="bg-background-1 flex flex-col gap-y-10 px-5 pb-[1.875rem] pt-5">
      <SidebarNavComponent {...{ website, cta }} />
      <SidebarHeadlineComponent
        {...{ headline1, headline2, headline3, description }}
      />
      <SidebarOfferingsComponent {...offerings} />
      <SidebarContactLinksComponent {...{ contactLinks }} />
    </aside>
  );
};
