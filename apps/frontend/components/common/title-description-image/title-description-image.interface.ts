import { StrapiImage } from "../strapi/strapi-image.interface";

export interface CommonTitleDescriptionImage {
  title: string;
  description: string;
  image: StrapiImage;
}
