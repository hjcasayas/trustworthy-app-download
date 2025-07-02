export const BlockNames = {
  ComponentBlocksHeader: "ComponentBlocksHeader",
  ComponentBlocksGetMoreDone: "ComponentBlocksGetMoreDone",
} as const;

export type BlockNameType = keyof typeof BlockNames;
