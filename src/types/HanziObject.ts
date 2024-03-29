export type HanziObject = {
  id: number;
  code: string;
  sinogram: string;
  key: string;
  strokes: string;
  pinyin: string;
  tone: 0 | 1 | 2 | 3 | 4;
  exampleSino: string;
  examplePinyin: string;
};
