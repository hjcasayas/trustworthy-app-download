import { StrapiBlock } from "@/components/strapi/strapi-block";

import { HeaderLogosComponent } from "./logos/header-logos.component";
import { HeaderHeroComponent } from "./hero/header-hero.component";
import { HeaderBlock } from "./header.interface";

export interface HeaderBlockComponentProps extends HeaderBlock, StrapiBlock {}

export const HeaderBlockComponent = ({
  hero,
  headlines,
  logos1,
  logos2,
}: HeaderBlock) => {
  return (
    <header className="desktop:w-3/5 desktop:items-start flex flex-col">
      <div className="tablet:px-10 tablet:gap-y-[3.125rem] desktop:w-[47.5rem] desktop:pb-[3.125rem] flex w-full flex-col gap-y-[1.5625rem] px-5 pt-[3.125rem]">
        <HeaderHeroComponent {...{ hero, headlines }} />
        <HeaderLogosComponent {...{ logos1, logos2 }} />
      </div>
    </header>
  );
};
