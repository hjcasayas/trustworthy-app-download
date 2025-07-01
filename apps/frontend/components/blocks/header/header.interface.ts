import { StrapiImage } from "@/components/common/strapi/strapi-image.interface";
import { CommonText } from "@/components/common/text/text.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";

export interface HeaderHeadline extends CommonText, StrapiBase {}
export interface HeaderLogo extends StrapiImage, StrapiBase {}

export interface HeaderBlock {
  hero: StrapiImage;
  headlines: HeaderHeadline[];
  logos: HeaderLogo[];
}
