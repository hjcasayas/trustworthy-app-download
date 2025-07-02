export const BlockNames = {
  ComponentBlocksHeader: "ComponentBlocksHeader",
  ComponentBlocksGetMoreDone: "ComponentBlocksGetMoreDone",
  ComponentBlocksReliableApp: "ComponentBlocksReliableApp",
} as const;

export type BlockNameType = keyof typeof BlockNames;
