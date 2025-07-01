import { SidebarBlockComponentProps } from "@/components/blocks/sidebar/sidebar.component";

export const SidebarHeadlineComponent = ({
  headline1,
  headline2,
  headline3,
  description,
}: Pick<
  SidebarBlockComponentProps,
  "headline1" | "headline2" | "headline3" | "description"
>) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="heading-1 text-background-2 flex flex-col">
        <span>{headline1}</span>
        <div className="flex flex-row gap-x-1">
          <span>{headline2}</span>
          <span className="text-accent-1">{headline3}</span>
        </div>
      </h1>
      <p className="paragraph">{description}</p>
    </div>
  );
};
