import Link from "next/link";
import { SidebarOfferings } from "./offerings.interface";
import { ImageLoader } from "@/components/image-loader/image-loader.component";

export const SidebarOfferingsComponent = ({
  title,
  navigationLinks,
}: SidebarOfferings) => {
  return (
    <div className="flex flex-col gap-y-5">
      <h2 className="text-accent-1 link font-medium">{title}</h2>
      <ul className="flex flex-row gap-x-[0.625rem]">
        {navigationLinks.map(({ label, url, id, icon }) => (
          <li
            key={id}
            className="bg-accent-3 text-background-1 w-1/3 rounded-sm"
          >
            <Link
              className="flex flex-col items-center justify-center gap-y-[0.875rem] px-[0.625rem] py-5"
              href={url}
            >
              {icon != null ? (
                <ImageLoader
                  src={icon.url}
                  alt={icon.alternativeText ?? "Offering icon"}
                  width={icon?.width}
                  height={icon?.height}
                  className="relative"
                />
              ) : null}
              <div className="flex flex-col items-center justify-center">
                {label.split(/\s/g).map((word, index) => {
                  return (
                    <span className="link text-center" key={index}>
                      {word}
                    </span>
                  );
                })}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
