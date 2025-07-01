import { StrapiImage } from "@/components/common/strapi/strapi-image.interface";
import { CommonText } from "@/components/common/text/text.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";
import { StrapiDocument } from "@/components/strapi/strapi-document";

export interface HeaderHeadline extends CommonText, StrapiBase {}
export interface HeaderLogo extends StrapiImage, StrapiDocument {}

export interface HeaderBlock {
  hero: StrapiImage;
  headlines: HeaderHeadline[];
  logos1: HeaderLogo[];
  logos2: HeaderLogo[];
}
