import { CommonWebsite } from "@/components/common/website/website.interface";
import { ImageLoader } from "@/components/image-loader/image-loader.component";

export const SidebarWebsiteComponent = ({ logo, name }: CommonWebsite) => {
  return (
    <div className="flex flex-row items-center justify-start gap-x-5">
      <ImageLoader
        src={logo.url}
        alt={logo.alternativeText || "Website logo"}
        width={logo.width}
        height={logo.height}
      />
      <h2 className="font-ibm-plex-sans text-background-2 font-semibold leading-[1.058] -tracking-[0.02em]">
        {name}
      </h2>
    </div>
  );
};
