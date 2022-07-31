type StringNumberPair = [string, number];

export function parsePinyinTone(input: string): StringNumberPair {
  const isValid = [...input].every((char, index) =>
    index === input.length - 1 ? char.match(/[01234]/) : char.match(/[A-Z]/i)
  );
  return isValid
    ? [input.slice(0, -1), parseInt(input.slice(-1))]
    : ['error', 0];
}
