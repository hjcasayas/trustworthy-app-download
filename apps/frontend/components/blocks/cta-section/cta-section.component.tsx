import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { StrapiBlock } from "@/components/strapi/strapi-block";

import { CtaSectionContentComponent } from "./cta-section-content/cta-section-content.component";
import { CtaSectionBlock } from "./cta-section.interface";

export interface CtaSectionBlockComponentProps
  extends CtaSectionBlock,
    StrapiBlock {}

export const CtaSectionBlockComponent = ({
  headline,
  cta,
  image: { url, alternativeText },
}: CtaSectionBlockComponentProps) => {
  return (
    <section className="tablet:px-10 tablet:pt-[50px] px-5 pb-[100px]">
      <div className="relative h-[350px] w-full overflow-clip rounded-[10px]">
        <ImageLoader
          src={url}
          alt={alternativeText ?? "Hero Image"}
          fill
          sizes="100%"
          className="object-cover"
        />
        <CtaSectionContentComponent {...{ headline, cta }} />
      </div>
    </section>
  );
};
