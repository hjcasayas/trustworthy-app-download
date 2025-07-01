import { CommonLink } from "@/components/common/link/link.interface";
import { CommonWebsite } from "@/components/common/website/website.interface";
import { SidebarOfferings } from "@/components/sidebar/offerings/offerings.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";

export interface SidebarBlockLink extends CommonLink, StrapiBase {}

export interface SidebarBlock {
  website: CommonWebsite;
  cta: CommonLink;
  headline1: string;
  headline2: string;
  headline3: string;
  description: string;
  offerings: SidebarOfferings;
  contactLinks: SidebarBlockLink[];
}
