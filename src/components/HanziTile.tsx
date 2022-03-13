import { HanziObject } from '../types/HanziObject';
import { formatPinyin } from '../utils/formatPinyin';

type Props = { hanzi: HanziObject; handleClick: (hanzi: HanziObject) => void };

export function HanziTile({ hanzi, handleClick }: Props) {
  return (
    <button
      id={'hanzi-' + hanzi.id}
      type="button"
      className="border rounded border-gray-900 bg-gray-100 py-4 flex flex-col items-center"
      onClick={() => handleClick(hanzi)}
    >
      <h3 className="font-hanzi text-7xl">{hanzi.sinogram}</h3>
      <p className="text-2xl bold">{formatPinyin(hanzi.pinyin, hanzi.tone)}</p>
      <p className="font-hanziClassic text-gray-500 text-lg">
        {hanzi.exampleSino}
      </p>
    </button>
  );
}
