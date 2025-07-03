import { SidebarBlock } from "../blocks/sidebar/sidebar.interface";
import { CommonFooter } from "../common/footer/footer.interface";
import { StrapiBlock } from "../strapi/strapi-block";

export interface LandingPageSingle {
  sidebar: SidebarBlock;
  blocks: StrapiBlock[];
  footer: CommonFooter;
}
