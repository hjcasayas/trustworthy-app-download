import { FirstClassSoftwareBlockComponentProps } from "../first-class-software.component";

export const FirstClassSoftwareHeadingComponent = ({
  headline,
  description,
}: Pick<FirstClassSoftwareBlockComponentProps, "headline" | "description">) => {
  return (
    <div className="flex flex-col gap-y-[10px]">
      <h2 className="heading-1 text-background-1 text-center">{headline}</h2>
      <p className="link text-sub-heading text-center">{description}</p>
    </div>
  );
};
