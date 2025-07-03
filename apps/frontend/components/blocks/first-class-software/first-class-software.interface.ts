import { CommonTextWithIcon } from "@/components/common/text-with-icon/text-with-icon.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";

export interface FirstClassSoftwareCard
  extends CommonTextWithIcon,
    StrapiBase {}

export interface FirstClassSoftwareBlock {
  headline: string;
  description: string;
  cards: FirstClassSoftwareCard[];
}
