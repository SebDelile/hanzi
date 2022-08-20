type StringNumberPair = [string, number];

export function parsePinyinTone(input: string): StringNumberPair {
  // TODO: refine the regexp to only accept valid pinyin
  // exactly one or more letters + one digit bellow 5
  const regex = /^[A-Z]+[0-4]$/i;
  return regex.test(input)
    ? [input.slice(0, -1), parseInt(input.slice(-1))]
    : ['invalid', 0];
}
