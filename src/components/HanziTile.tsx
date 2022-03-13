import { HanziObject } from '../types/HanziObject';

type Props = { hanzi: HanziObject };

export function HanziTile({ hanzi }: Props) {
  return (
    <button
      id={'hanzi-' + hanzi.id}
      type="button"
      className="border rounded border-gray-900 bg-gray-100 py-4 flex flex-col items-center"
    >
      <h3 className="font-hanzi text-7xl">{hanzi.sinogram}</h3>
      <p className="text-2xl bold">{hanzi.pinyin}</p>
      <p className="font-hanziClassic text-gray-500 text-lg">
        {hanzi.exampleSino}
      </p>
    </button>
  );
}
