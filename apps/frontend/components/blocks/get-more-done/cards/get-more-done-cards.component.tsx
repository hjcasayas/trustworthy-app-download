import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { GetMoreDoneComponentProps } from "../get-more-done.component";

export const GetMoreDoneCardsComponent = ({
  cards,
}: Pick<GetMoreDoneComponentProps, "cards">) => {
  return (
    <ul className="tablet:grid-cols-2 grid grid-cols-1 gap-5">
      {cards.map(
        ({ id, icon: { url, alternativeText, height, width }, text }) => (
          <li
            key={id}
            className="relative flex flex-col items-center justify-between gap-y-[30px] bg-[#D2FD9C] px-5 py-[30px]"
          >
            <ImageLoader
              src={url}
              alt={alternativeText ?? text}
              width={width}
              height={height}
            />
            <span className="paragraph text-heading text-center">{text}</span>
          </li>
        )
      )}
    </ul>
  );
};
