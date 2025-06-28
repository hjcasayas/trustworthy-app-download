import {
  SidebarBlockComponent,
  SidebarBlockComponentProps,
} from "../blocks/sidebar/sidebar.component";
import { BlockNames } from "./block-name";

export type BlockRendererProps = SidebarBlockComponentProps[];

export const BlockRenderer = ({ blocks }: { blocks: BlockRendererProps }) => {
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
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
