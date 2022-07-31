import { starterStep } from '../constants/testSteps';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';
import { formatPinyin } from '../utils/formatPinyin';

type Props = {
  testSheet: readingTestSheetItem[];
  setCurrentStep: (step: string) => void;
};

export function ReadingTestResultStep({ testSheet, setCurrentStep }: Props) {
  return (
    <>
      <div>Result step</div>
      <ul>
        {testSheet.map((testSheetItem, index) => {
          const { hanzi, pinyin, tone } = testSheetItem;
          const isCorrect = hanzi.pinyin === pinyin && hanzi.tone === tone;
          return (
            <li key={index}>{`${hanzi.sinogram} : ${
              isCorrect
                ? 'correct !'
                : `${formatPinyin(pinyin, tone ?? 0)} is incorrect...`
            }`}</li>
          );
        })}
      </ul>
      <button onClick={() => setCurrentStep(starterStep)}>reset</button>
    </>
  );
}
