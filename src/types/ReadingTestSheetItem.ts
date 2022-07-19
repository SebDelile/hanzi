import { HanziObject } from './HanziObject';

export type readingTestSheetItem = {
  hanzi: HanziObject;
  pinyin: string;
  tone: number | null;
};
