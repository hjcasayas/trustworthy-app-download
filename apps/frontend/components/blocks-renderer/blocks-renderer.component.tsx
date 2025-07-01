import {
  HeaderBlockComponent,
  HeaderBlockComponentProps,
} from "../blocks/header/header.component";
import {
  SidebarBlockComponent,
  SidebarBlockComponentProps,
} from "../blocks/sidebar/sidebar.component";
import { StrapiBlock } from "../strapi/strapi-block";
import { BlockNames } from "./block-name";

export const BlockRenderer = ({ blocks }: { blocks: StrapiBlock[] }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case BlockNames.ComponentBlocksSidebar: {
            const currentBlock = block as SidebarBlockComponentProps;
            return (
              <SidebarBlockComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case BlockNames.ComponentBlocksHeader: {
            const currentBlock = block as HeaderBlockComponentProps;
            return (
              <HeaderBlockComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
