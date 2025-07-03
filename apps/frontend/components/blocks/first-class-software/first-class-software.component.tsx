import { StrapiBlock } from "@/components/strapi/strapi-block";

import { FirstClassSoftwareHeadingComponent } from "./heading/first-class-software-heading.component";
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
    <section className="tablet:px-10 tablet:pb-0 desktop:py-20 flex flex-col gap-y-[30px] px-5 py-[50px]">
      <FirstClassSoftwareHeadingComponent
        headline={headline}
        description={description}
      />
      <FirstClassSoftwareHeadingComponent
        headline={headline}
        description={description}
        {...{ cards }}
      />
    </section>
  );
};
