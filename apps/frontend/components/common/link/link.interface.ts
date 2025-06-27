import { StrapiImage } from "../strapi/strapi-image.interface";

export interface CommonLink {
  label: string;
  url: string;
  isExternal: boolean;
  icon?: StrapiImage;
}
