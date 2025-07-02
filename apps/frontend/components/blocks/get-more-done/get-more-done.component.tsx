import { StrapiBlock } from "@/components/strapi/strapi-block";
import { GetMoreDoneBlock } from "./get-more-done.interface";
import { ImageLoader } from "@/components/image-loader/image-loader.component";

export interface GetMoreDoneComponentProps
  extends GetMoreDoneBlock,
    StrapiBlock {}

export const GetMoreDoneComponent = ({
  headline,
  description,
  cards,
}: GetMoreDoneComponentProps) => {
  return (
    <section className="tablet:px-10 flex flex-col gap-y-[30px] px-5 py-20">
      <div className="flex flex-col items-center gap-y-[10px]">
        <h2 className="heading-1 text-heading text-center">{headline}</h2>
        <p className="link text-paragraph-2 text-center">{description}</p>
      </div>
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
    </section>
  );
};
