import {
  FirstClassSoftwareBlockComponent,
  FirstClassSoftwareBlockComponentProps,
} from "../blocks/first-class-software/first-class-software.component";
import {
  GetMoreDoneComponent,
  GetMoreDoneComponentProps,
} from "../blocks/get-more-done/get-more-done.component";
import {
  HeaderBlockComponent,
  HeaderBlockComponentProps,
} from "../blocks/header/header.component";
import {
  ImageBreakerBlockComponent,
  ImageBreakerBlockComponentProps,
} from "../blocks/image-breaker/image-breaker.component";
import {
  ReliableAppBlockComponent,
  ReliableAppBlockProps,
} from "../blocks/releable-app/reliable-app.component";
import { StrapiBlock } from "../strapi/strapi-block";
import { BlockNames } from "./block-name";

export const BlockRenderer = ({ blocks }: { blocks: StrapiBlock[] }) => {
  return (
    <main>
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

          case BlockNames.ComponentBlocksReliableApp: {
            const currentBlock = block as ReliableAppBlockProps;
            return (
              <ReliableAppBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }

          case BlockNames.ComponentBlocksImageBreaker: {
            const currentBlock = block as ImageBreakerBlockComponentProps;
            return (
              <ImageBreakerBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }

          case BlockNames.ComponentBlocksFirstClassSoftware: {
            const currentBlock = block as FirstClassSoftwareBlockComponentProps;
            return (
              <FirstClassSoftwareBlockComponent
                key={currentBlock.id}
                {...currentBlock}
              />
            );
          }

          default: {
            return null;
          }
        }
      })}
    </main>
  );
};
