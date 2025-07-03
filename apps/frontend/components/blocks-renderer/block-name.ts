export const BlockNames = {
  ComponentBlocksHeader: "ComponentBlocksHeader",
  ComponentBlocksGetMoreDone: "ComponentBlocksGetMoreDone",
  ComponentBlocksReliableApp: "ComponentBlocksReliableApp",
  ComponentBlocksImageBreaker: "ComponentBlocksImageBreaker",
  ComponentBlocksFirstClassSoftware: "ComponentBlocksFirstClassSoftware",
} as const;

export type BlockNameType = keyof typeof BlockNames;
