import { STARTER_STEP } from '../constants/testSteps';
import { HanziObject } from '../types/HanziObject';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';
import { formatPinyin } from '../utils/formatPinyin';

type Props = {
  testSheet: readingTestSheetItem[];
  setCurrentStep: (step: string) => void;
};

export function ReadingTestResultStep({ testSheet, setCurrentStep }: Props) {
  const isCorrect = ({ hanzi, pinyin, tone }: readingTestSheetItem): boolean =>
    hanzi.pinyin === pinyin && hanzi.tone === tone;

  return (
    <>
      <div>Result step</div>
      <div>{`Note : ${testSheet.reduce(
        (acc, cur) => acc + Number(isCorrect(cur)),
        0
      )} / ${testSheet.length}`}</div>
      <ul>
        {testSheet.map((testSheetItem, index) => {
          const { hanzi, pinyin, tone } = testSheetItem;

          return (
            <li key={index}>{`${hanzi.sinogram} : ${formatPinyin(
              pinyin,
              tone ?? 0
            )} ${
              isCorrect({ hanzi, pinyin, tone })
                ? 'est la bonne réponse ! Bravo !!!'
                : `est incorrect... C'est ${formatPinyin(
                    hanzi.pinyin,
                    hanzi.tone ?? 0
                  )}`
            }`}</li>
          );
        })}
      </ul>
      <button
        className="button self-center"
        onClick={() => setCurrentStep(STARTER_STEP)}
      >
        reset
      </button>
    </>
  );
}
