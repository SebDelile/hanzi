import { HanziObject } from '../types/HanziObject';

export function pickRandomHanziSelection(
  hanziList: HanziObject[],
  count: number
): HanziObject[] {
  const hanziSelectionIndexes: number[] = [];
  const hanziListLength = hanziList.length;

  // negativeMode = pick the ones to exclude instead of the ones to include
  // So the worse possible situation is when half of the item has already beeing picked
  const isNegativeMode = count > hanziListLength / 2;
  const hanziSelectionTargetedLength = isNegativeMode
    ? hanziListLength - count
    : count;

  while (hanziSelectionIndexes.length < hanziSelectionTargetedLength) {
    const randomIndex = Math.floor(Math.random() * hanziListLength);
    if (!hanziSelectionIndexes.includes(randomIndex)) {
      hanziSelectionIndexes.push(randomIndex);
    }
  }

  const hanziSelection = isNegativeMode
    ? hanziList.filter(
        (_hanzi, index) => !hanziSelectionIndexes.includes(index)
      )
    : hanziSelectionIndexes.map((index) => hanziList[index]);

  return hanziSelection;
}
