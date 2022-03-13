export function formatPinyin(pinyin: string, tone: number): string {
  if (pinyin.includes('a')) {
    return pinyin.replace('a', ['a', 'ā', 'á', 'ǎ', 'à'][tone]);
  } else if (pinyin.includes('o')) {
    return pinyin.replace('o', ['o', 'ō', 'ó', 'ǒ', 'ò'][tone]);
  } else if (pinyin.includes('e')) {
    return pinyin.replace('e', ['e', 'ē', 'é', 'ě', 'è'][tone]);
  } else if (pinyin.includes('iu')) {
    return pinyin.replace('u', ['u', 'ū', 'ú', 'ǔ', 'ù'][tone]);
  } else if (pinyin.includes('i')) {
    return pinyin.replace('i', ['i', 'ī', 'í', 'ǐ', 'ì'][tone]);
  } else if (pinyin.includes('u')) {
    return pinyin.replace('u', ['u', 'ū', 'ú', 'ǔ', 'ù'][tone]);
  } else if (pinyin.includes('v')) {
    return pinyin.replace('v', ['ü', 'ǖ', 'ǘ', 'ǚ', 'ǜ'][tone]);
  }
  return pinyin;
}
