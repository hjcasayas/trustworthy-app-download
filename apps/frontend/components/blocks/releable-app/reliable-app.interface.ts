import { CommonTitleDescriptionImage } from "@/components/common/title-description-image/title-description-image.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";

export interface ReliableAppBenefit
  extends CommonTitleDescriptionImage,
    StrapiBase {}

export interface ReliableAppBlock {
  headline: string;
  benefits: ReliableAppBenefit[];
}
