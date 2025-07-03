import { StrapiBase } from "@/components/strapi/strapi-base";

import { CommonLink } from "../../link/link.interface";

export interface FooterContactDetailsLink extends CommonLink, StrapiBase {}

export interface FooterContactDetails {
  title: string;
  links: FooterContactDetailsLink[];
}
