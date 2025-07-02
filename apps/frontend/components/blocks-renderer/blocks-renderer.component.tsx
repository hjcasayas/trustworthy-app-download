import {
  GetMoreDoneComponent,
  GetMoreDoneComponentProps,
} from "../blocks/get-more-done/get-more-done.component";
import {
  HeaderBlockComponent,
  HeaderBlockComponentProps,
} from "../blocks/header/header.component";
import { StrapiBlock } from "../strapi/strapi-block";
import { BlockNames } from "./block-name";

export const BlockRenderer = ({ blocks }: { blocks: StrapiBlock[] }) => {
  return (
    <>
      {blocks.map((block) => {
        switch (block.__typename) {
          case BlockNames.ComponentBlocksHeader: {
            const currentBlock = block as HeaderBlockComponentProps;
            return (
              <HeaderBlockComponent key={currentBlock.id} {...currentBlock} />
            );
          }
          case BlockNames.ComponentBlocksGetMoreDone: {
            const currentBlock = block as GetMoreDoneComponentProps;
            return (
              <GetMoreDoneComponent key={currentBlock.id} {...currentBlock} />
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
