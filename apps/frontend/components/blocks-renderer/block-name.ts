export const BlockNames = {
  ComponentBlocksHeader: "ComponentBlocksHeader",
} as const;

export type BlockNameType = keyof typeof BlockNames;
