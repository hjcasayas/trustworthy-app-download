import { StrapiBlock } from "@/components/strapi/strapi-block";
import { SidebarBlock } from "./sidebar.interface";
import { SidebarWebsiteComponent } from "@/components/sidebar/website/website.component";

export interface SidebarBlockComponentProps extends SidebarBlock, StrapiBlock {}

export const SidebarBlockComponent = ({
  website,
}: SidebarBlockComponentProps) => {
  return (
    <aside className="bg-background-1 flex flex-col gap-y-10 px-5 pb-[1.875rem] pt-5">
      <nav className="flex flex-row items-start justify-between">
        <SidebarWebsiteComponent {...website} />
      </nav>
    </aside>
  );
};
