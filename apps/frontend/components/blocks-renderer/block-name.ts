export const BlockNames = {
  ComponentBlocksHeader: "ComponentBlocksHeader",
  ComponentBlocksGetMoreDone: "ComponentBlocksGetMoreDone",
  ComponentBlocksReliableApp: "ComponentBlocksReliableApp",
  ComponentBlocksImageBreaker: "ComponentBlocksImageBreaker",
} as const;

export type BlockNameType = keyof typeof BlockNames;
