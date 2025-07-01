import { SidebarBlock } from "../blocks/sidebar/sidebar.interface";
import { StrapiBlock } from "../strapi/strapi-block";

export interface LandingPageSingle {
  sidebar: SidebarBlock;
  blocks: StrapiBlock[];
}
