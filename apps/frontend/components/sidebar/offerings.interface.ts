import { CommonLink } from "../common/link/link.interface";
import { StrapiBase } from "../strapi/strapi-base";

export interface NavigationLink extends CommonLink, StrapiBase {}

export interface SidebarOfferings {
  title: string;
  navigationLinks: NavigationLink[];
}
