import { CommonLink } from "@/components/common/link/link.interface";
import { StrapiImage } from "@/components/common/strapi/strapi-image.interface";

export interface CtaSectionBlock {
  headline: string;
  cta: CommonLink;
  image: StrapiImage;
}
