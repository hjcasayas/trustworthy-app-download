import { getStrapiImage } from "@/utils/get-strapi-image.util";
import { ImageLoader, ImageLoaderProps } from "next/image";

export const imageLoader: ImageLoader = ({
  src,
  width,
  quality,
}: ImageLoaderProps) => {
  return `${getStrapiImage(src)}?w=${width}&q=${quality || 75}`;
};
