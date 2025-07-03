import { StrapiBlock } from "@/components/strapi/strapi-block";

import { ReliableAppBenefitsComponent } from "./benefits/reliable-app-benefits.component";
import { ReliableAppBlock } from "./reliable-app.interface";

export interface ReliableAppBlockProps extends ReliableAppBlock, StrapiBlock {}

export const ReliableAppBlockComponent = ({
  headline,
  benefits,
}: ReliableAppBlockProps) => {
  return (
    <section className="tablet:px-10 tablet:pt-20 tablet:pb-0 flex flex-col items-center gap-y-[30px] px-5 py-[50px]">
      <h2 className="heading-1 text-heading">{headline}</h2>
      <ReliableAppBenefitsComponent {...{ benefits }} />
    </section>
  );
};
