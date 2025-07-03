import { StrapiBlock } from "@/components/strapi/strapi-block";

import { GetMoreDoneHeadingComponent } from "./heading/get-more-done-heading.component";
import { GetMoreDoneCardsComponent } from "./cards/get-more-done-cards.component";
import { GetMoreDoneBlock } from "./get-more-done.interface";

export interface GetMoreDoneComponentProps
  extends GetMoreDoneBlock,
    StrapiBlock {}

export const GetMoreDoneComponent = ({
  headline,
  description,
  cards,
}: GetMoreDoneComponentProps) => {
  return (
    <section className="tablet:px-10 tablet:pb-0 desktop:pb-20 flex flex-col gap-y-[30px] px-5 py-20">
      <GetMoreDoneHeadingComponent {...{ headline, description }} />
      <GetMoreDoneCardsComponent {...{ cards }} />
    </section>
  );
};
