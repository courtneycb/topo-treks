const District = ["Canterbury", "Otago"];

const HikeType = ["Day", "Overnight", "Multi"];

export const tags = [...District, ...HikeType] as const;

export type Tag = typeof tags[number];
