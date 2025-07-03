export const BlockNames = {
  ComponentBlocksHeader: "ComponentBlocksHeader",
  ComponentBlocksGetMoreDone: "ComponentBlocksGetMoreDone",
  ComponentBlocksReliableApp: "ComponentBlocksReliableApp",
  ComponentBlocksImageBreaker: "ComponentBlocksImageBreaker",
  ComponentBlocksFirstClassSoftware: "ComponentBlocksFirstClassSoftware",
  ComponentBlocksCtaSection: "ComponentBlocksCtaSection",
} as const;

export type BlockNameType = keyof typeof BlockNames;
