import { SidebarBlock } from "@/components/blocks/sidebar/sidebar.interface";
import Link from "next/link";

export const SidebarContactLinksComponent = ({
  contactLinks,
}: Pick<SidebarBlock, "contactLinks">) => {
  return (
    <nav>
      <ul className="flex flex-row gap-x-[0.8rem]">
        {contactLinks.map((link) => (
          <li key={link.id}>
            <Link className="link text-accent-1" href={link.url}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
