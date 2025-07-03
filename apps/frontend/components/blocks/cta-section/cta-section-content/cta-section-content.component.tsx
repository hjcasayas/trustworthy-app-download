import { CommonCtaComponent } from "@/components/common/cta/cta.component";
import { CommonLink } from "@/components/common/link/link.interface";

export interface CtaSectionContentProps {
  headline: string;
  cta: CommonLink;
}

export const CtaSectionContentComponent = ({
  headline,
  cta,
}: CtaSectionContentProps) => {
  return (
    <div className="tablet:px-10 absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-start justify-end gap-y-[14px] px-5 pb-[34px] pt-[65px]">
      <h2 className="heading-2 text-overlay tablet:max-w-[310px] tablet:text-background-2 max-w-[280px]">
        {headline}
      </h2>
      <CommonCtaComponent {...cta} />
    </div>
  );
};
