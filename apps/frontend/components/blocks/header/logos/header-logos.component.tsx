import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { HeaderBlockComponentProps } from "../header.component";

export const HeaderLogosComponent = ({
  logos1,
  logos2,
}: Pick<HeaderBlockComponentProps, "logos1" | "logos2">) => {
  return (
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
  );
};
