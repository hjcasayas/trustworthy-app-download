import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { StrapiBlock } from "@/components/strapi/strapi-block";

import { FirstClassSoftwareHeadingComponent } from "./cards/first-class-software-heading.component";
import { FirstClassSoftwareBlock } from "./first-class-software.interface";

export interface FirstClassSoftwareBlockComponentProps
  extends FirstClassSoftwareBlock,
    StrapiBlock {}

export const FirstClassSoftwareBlockComponent = ({
  headline,
  description,
  cards,
}: FirstClassSoftwareBlockComponentProps) => {
  return (
    <section className="tablet:px-10 tablet:pb-0 flex flex-col gap-y-[30px] px-5 py-[50px]">
      <FirstClassSoftwareHeadingComponent
        headline={headline}
        description={description}
      />
      <ul className="tablet:grid-cols-4 tablet:gap-10 grid grid-cols-1 gap-[30px]">
        {cards.map(({ id, icon: { url, alternativeText }, text }) => (
          <li key={id} className="flex flex-col gap-y-[15px]">
            <div className="tablet:h-[116px] relative h-[250px] overflow-clip rounded-[10px]">
              <ImageLoader
                className="object-cover"
                src={url}
                alt={alternativeText ?? text}
                fill
                sizes="100%"
              />
            </div>
            <span className="link text-paragraph-1 self-center text-center">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
