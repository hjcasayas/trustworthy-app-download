import { CommonCtaComponent } from "@/components/common/cta/cta.component";
import { SidebarBlock } from "@/components/blocks/sidebar/sidebar.interface";

import { SidebarWebsiteComponent } from "../website/website.component";

export const SidebarNavComponent = ({
  cta,
  website,
}: Pick<SidebarBlock, "website" | "cta">) => {
  return (
    <nav className="flex flex-row items-start justify-between">
      <SidebarWebsiteComponent {...website} />
      <CommonCtaComponent {...cta} />
    </nav>
  );
};
