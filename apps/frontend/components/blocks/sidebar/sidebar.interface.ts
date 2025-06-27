import { CommonLink } from "@/components/common/link/link.interface";
import { CommonWebsite } from "@/components/common/website/website.interface";
import { SidebarOfferings } from "@/components/sidebar/offerings.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";

export interface SidebarBlockLink extends CommonLink, StrapiBase {}

export interface SidebarBlock {
  website: CommonWebsite;
  cta: CommonLink;
  headline: string;
  description: string;
  offerings: SidebarOfferings;
  contactLinks: SidebarBlockLink[];
}
