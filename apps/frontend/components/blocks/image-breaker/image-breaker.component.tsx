import { StrapiBlock } from "@/components/strapi/strapi-block";
import { ImageBreakerBlock } from "./image-breaker.interface";
import { ImageLoader } from "@/components/image-loader/image-loader.component";

export interface ImageBreakerBlockComponentProps
  extends ImageBreakerBlock,
    StrapiBlock {}

export const ImageBreakerBlockComponent = ({
  mobile,
  tablet,
}: ImageBreakerBlockComponentProps) => {
  return (
    <section className="tablet:px-10 tablet:py-[100px] px-5 py-[60px]">
      <div className="tablet:h-[350px] relative h-[400px] overflow-clip rounded-[10px]">
        <ImageLoader
          src={mobile.url}
          alt={mobile.alternativeText ?? "Image Breaker Hero"}
          fill
          sizes="100%"
          className="tablet:hidden block object-cover"
        />
        <ImageLoader
          src={tablet.url}
          alt={tablet.alternativeText ?? "Image Breaker Hero"}
          fill
          sizes="100%"
          className="tablet:block hidden object-cover"
        />
      </div>
    </section>
  );
};
