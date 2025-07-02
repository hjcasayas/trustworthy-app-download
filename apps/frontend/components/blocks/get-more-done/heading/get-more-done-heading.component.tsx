import { GetMoreDoneComponentProps } from "../get-more-done.component";

export const GetMoreDoneHeadingComponent = ({
  headline,
  description,
}: Pick<GetMoreDoneComponentProps, "headline" | "description">) => {
  return (
    <div className="flex flex-col items-center gap-y-[10px]">
      <h2 className="heading-1 text-heading text-center">{headline}</h2>
      <p className="link text-paragraph-2 text-center">{description}</p>
    </div>
  );
};
