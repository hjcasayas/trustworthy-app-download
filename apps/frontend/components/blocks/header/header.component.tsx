import { StrapiBlock } from "@/components/strapi/strapi-block";
import { HeaderBlock } from "./header.interface";
import { ImageLoader } from "@/components/image-loader/image-loader.component";

export interface HeaderBlockComponentProps extends HeaderBlock, StrapiBlock {}

export const HeaderBlockComponent = ({
  hero,
  headlines,
  logos1,
  logos2,
}: HeaderBlock) => {
  return (
    <header className="desktop:w-3/5 desktop:items-start flex flex-col">
      <div className="tablet:px-10 tablet:gap-y-[3.125rem] desktop:w-[760px] flex w-full flex-col gap-y-[1.5625rem] px-5 pt-[3.125rem]">
        <div className="tablet:h-[23.8125rem] relative h-[25rem] w-full overflow-clip rounded-[1.25rem]">
          <ImageLoader
            priority
            src={hero.url}
            alt={hero.alternativeText ?? "Header Hero Image"}
            fill
            sizes="100%"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          {headlines.map((headline) => (
            <h2 key={headline.id} className="heading-3 text-paragraph-1">
              {headline.text}
            </h2>
          ))}
        </div>
        <div className="tablet:flex-row flex flex-col items-center justify-center gap-12">
          <div className="flex flex-row items-center justify-center gap-x-12">
            {logos1.map((logo) => (
              <ImageLoader
                key={logo.documentId}
                src={logo.url}
                alt={logo.alternativeText ?? "Company Logo"}
                width={logo.width}
                height={logo.height}
                className="relative"
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-x-12">
            {logos2.map((logo) => (
              <ImageLoader
                key={logo.documentId}
                src={logo.url}
                alt={logo.alternativeText ?? "Company Logo"}
                width={logo.width}
                height={logo.height}
                className="relative"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
