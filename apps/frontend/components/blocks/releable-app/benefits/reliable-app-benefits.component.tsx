import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { ReliableAppBlockProps } from "../reliable-app.component";

export const ReliableAppBenefitsComponent = ({
  benefits,
}: Pick<ReliableAppBlockProps, "benefits">) => {
  return (
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
  );
};
