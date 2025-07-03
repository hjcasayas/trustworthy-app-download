import { StrapiBase } from "@/components/strapi/strapi-base";

import { FooterContactDetails } from "./contact-details/footer-contact-details.interface";
import { StrapiImage } from "../strapi/strapi-image.interface";
import { CommonLink } from "../link/link.interface";

export interface CommonFooterLink extends CommonLink, StrapiBase {}

export interface CommonFooter {
  websiteLogo: StrapiImage;
  websiteName: StrapiImage;
  contactDetails: FooterContactDetails;
  policyLinks: CommonFooterLink[];
}
