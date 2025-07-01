export const BlockNames = {
  ComponentBlocksSidebar: "ComponentBlocksSidebar",
  ComponentBlocksHeader: "ComponentBlocksHeader",
} as const;

export type BlockNameType = keyof typeof BlockNames;
