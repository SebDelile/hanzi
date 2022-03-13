import { formatPinyin } from './formatPinyin';

export function formatPinyinSentence(pinyinSentence: string): string {
  return pinyinSentence
    .split(' ')
    .map((pinyinAndTone) =>
      formatPinyin(pinyinAndTone.slice(0, -1), Number(pinyinAndTone.at(-1)))
    )
    .join(' ');
}
