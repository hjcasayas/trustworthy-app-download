export const BlockNames = {
  ComponentBlocksSidebar: "ComponentBlocksSidebar",
} as const;

export type BlockNameType = keyof typeof BlockNames;
