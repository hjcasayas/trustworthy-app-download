import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { HeaderBlockComponentProps } from "../header.component";

export const HeaderHeroComponent = ({
  hero,
  headlines,
}: Pick<HeaderBlockComponentProps, "hero" | "headlines">) => {
  return (
    <>
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
    </>
  );
};
