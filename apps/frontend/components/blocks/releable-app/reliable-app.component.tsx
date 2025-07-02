import { StrapiBlock } from "@/components/strapi/strapi-block";
import { ReliableAppBlock } from "./reliable-app.interface";
import { ImageLoader } from "@/components/image-loader/image-loader.component";

export interface ReliableAppBlockProps extends ReliableAppBlock, StrapiBlock {}

export const ReliableAppBlockComponent = ({
  headline,
  benefits,
}: ReliableAppBlockProps) => {
  return (
    <section className="tablet:px-10 tablet:pt-20 tablet:pb-0 flex flex-col items-center gap-y-[30px] px-5 py-[50px]">
      <h2 className="heading-1 text-heading">{headline}</h2>
      <ul className="tablet:grid-cols-2 grid grid-cols-1 gap-5">
        {benefits.map(
          ({ id, title, description, image: { url, alternativeText } }) => (
            <li className="flex flex-col gap-y-[19px]" key={id}>
              <div className="relative h-[260px] overflow-clip rounded-[10px]">
                <ImageLoader
                  src={url}
                  alt={alternativeText || title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="link text-paragraph-1">{title}</h3>
                <p className="link text-paragraph-2">{description}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
