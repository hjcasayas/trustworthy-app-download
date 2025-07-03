import { ImageLoader } from "@/components/image-loader/image-loader.component";
import { CommonFooter } from "./footer.interface";
import Link from "next/link";

export const CommonFooterComponent = ({
  websiteLogo,
  websiteName,
  policyLinks,
  contactDetails,
}: CommonFooter) => {
  return (
    <section className="bg-background-3 tablet:px-10 flex flex-row justify-between px-5 py-[30px]">
      <div className="flex flex-col items-start justify-between gap-y-[140px]">
        <ImageLoader
          src={websiteLogo.url}
          alt={websiteLogo.alternativeText ?? "Website Logo"}
          width={websiteLogo.width}
          height={websiteLogo.height}
        />
        <ImageLoader
          src={websiteName.url}
          alt={websiteName.alternativeText ?? "Website Name"}
          width={websiteName.width}
          height={websiteName.height}
        />
      </div>
      <nav className="tablet:min-w-[167px] flex min-w-[162px] flex-col items-start justify-between">
        <div className="flex flex-col items-start justify-between gap-y-3">
          <h3 className="link text-paragraph-2">{contactDetails.title}</h3>
          <ul className="flex flex-col items-start justify-start gap-y-0.5">
            {contactDetails.links.map((link) => (
              <li key={link.id}>
                <Link
                  className="link text-paragraph-2"
                  href={link.url}
                  target={link.isExternal ? "_blank" : "_self"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul>
          {policyLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="link text-paragraph-2"
                href={link.url}
                target={link.isExternal ? "_blank" : "_self"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
