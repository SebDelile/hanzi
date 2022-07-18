import { HanziObject } from '../types/HanziObject';

export function pickRandomHanziSelection(
  hanziList: HanziObject[],
  count: number
): HanziObject[] {
  const hanziSelectionIndexes: number[] = [];
  const hanziListLength = hanziList.length;
  while (hanziSelectionIndexes.length < count) {
    const randomIndex = Math.floor(Math.random() * hanziListLength);
    if (!hanziSelectionIndexes.includes(randomIndex)) {
      hanziSelectionIndexes.push(randomIndex);
    }
  }

  return hanziSelectionIndexes.map((index) => hanziList[index]);
}
