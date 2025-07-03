import Link from "next/link";
import { CommonLink } from "../link/link.interface";

export const CommonCtaComponent = ({ label, url, isExternal }: CommonLink) => {
  return (
    <Link
      className="paragraph text-paragraph-1 bg-accent-1 px-[0.875rem] py-[0.6875rem]"
      href={url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
};
