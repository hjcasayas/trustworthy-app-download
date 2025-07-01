"use client";

import Image, { ImageProps } from "next/image";
import { imageLoader } from "./image-loader";

export interface ImageLoaderProps extends ImageProps {
  classname?: string;
}

export const ImageLoader = ({ className, ...linkProps }: ImageLoaderProps) => {
  return (
    <Image
      {...linkProps}
      className={className}
      loader={imageLoader}
      alt={
        linkProps.alt == null || linkProps.alt.trim() === ""
          ? "Image"
          : linkProps.alt
      }
    />
  );
};
