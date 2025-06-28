import { StrapiBlock } from "@/components/strapi/strapi-block";
import { SidebarBlock } from "./sidebar.interface";

export interface SidebarBlockComponentProps extends SidebarBlock, StrapiBlock {}

export const SidebarBlockComponent = (props: SidebarBlockComponentProps) => {
  console.log("SidebarBlockComponent props:", props);
  return <p>sidebar-block-component works!</p>;
};
