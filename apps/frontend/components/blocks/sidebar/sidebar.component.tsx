import { StrapiBlock } from "@/components/strapi/strapi-block";
import { SidebarBlock } from "./sidebar.interface";
import { SidebarNavComponent } from "@/components/sidebar/nav/nav.component";

export interface SidebarBlockComponentProps extends SidebarBlock, StrapiBlock {}

export const SidebarBlockComponent = ({
  website,
  cta,
}: SidebarBlockComponentProps) => {
  return (
    <aside className="bg-background-1 flex flex-col gap-y-10 px-5 pb-[1.875rem] pt-5">
      <SidebarNavComponent {...{ website, cta }} />
    </aside>
  );
};
