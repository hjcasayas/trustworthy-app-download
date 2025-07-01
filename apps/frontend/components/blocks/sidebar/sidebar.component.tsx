import { SidebarContactLinksComponent } from "@/components/sidebar/contact-links/contact-links.component";
import { SidebarOfferingsComponent } from "@/components/sidebar/offerings/offerings.component";
import { SidebarHeadlineComponent } from "@/components/sidebar/headline/headline.component";
import { SidebarNavComponent } from "@/components/sidebar/nav/nav.component";

import { SidebarBlock } from "./sidebar.interface";

export const SidebarBlockComponent = ({
  website,
  cta,
  headline1,
  headline2,
  headline3,
  description,
  offerings,
  contactLinks,
}: SidebarBlock) => {
  return (
    <aside className="bg-background-1 desktop:w-2/5 desktop:items-end flex flex-col">
      <div className="tablet:px-10 desktop:px-0 desktop:pt-[1.875rem] tablet:gap-y-[3.125rem] desktop:w-[22.1875rem] desktop:mr-[5.3125rem] flex w-full flex-col gap-y-10 self-end px-5 pb-[1.875rem] pt-5">
        <SidebarNavComponent {...{ website, cta }} />
        <SidebarHeadlineComponent
          {...{ headline1, headline2, headline3, description }}
        />
        <SidebarOfferingsComponent {...offerings} />
        <SidebarContactLinksComponent {...{ contactLinks }} />
      </div>
    </aside>
  );
};
