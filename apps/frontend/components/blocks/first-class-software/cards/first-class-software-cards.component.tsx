import { ImageLoader } from "@/components/image-loader/image-loader.component";

import { FirstClassSoftwareBlockComponentProps } from "../first-class-software.component";

export const FirstClassSoftwareCardComponent = ({
  cards,
}: Pick<FirstClassSoftwareBlockComponentProps, "cards">) => {
  return (
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
  );
};
