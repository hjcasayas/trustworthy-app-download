import { CommonTextWithIcon } from "@/components/common/text-with-icon/text-with-icon.interface";
import { StrapiBase } from "@/components/strapi/strapi-base";

export interface GetMoreDoneCard extends CommonTextWithIcon, StrapiBase {}

export interface GetMoreDoneBlock {
  headline: string;
  description: string;
  cards: GetMoreDoneCard[];
}
