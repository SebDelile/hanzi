import { STARTER_STEP } from '../constants/testSteps';
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
      <h2 className="h2">{`Résultat : ${testSheet.reduce(
        (acc, cur) => acc + Number(isCorrect(cur)),
        0
      )} / ${testSheet.length}`}</h2>
      <table>
        <thead className="hidden">
          <tr>
            <th>Hanzi</th>
            <th aria-hidden>→</th>
            <th>Réponse</th>
            <th>Résultat</th>
            <th>Commentaire</th>
          </tr>
        </thead>
        <tbody>
          {testSheet.map(({ hanzi, pinyin, tone }) => {
            const isResponseCorrect = isCorrect({ hanzi, pinyin, tone });
            return (
              <tr key={hanzi.id} className="[&>td]:px-3 xxs:text-xl">
                <td className=" text-2xl xxs:text-4xl py-3">
                  {hanzi.sinogram}
                </td>
                <td className="text-2xl w-0 hidden xs:table-cell">→</td>
                <td className="text-center font-bold">
                  {formatPinyin(pinyin, tone ?? 0)}
                </td>
                <td>{isResponseCorrect ? '✔️' : '❌'}</td>
                <td>
                  {isResponseCorrect ? (
                    <span className="hidden xs:inline">Bonne réponse !!!</span>
                  ) : (
                    <>
                      <span className="hidden xs:inline mr-1">Incorrect</span>
                      <span className="mr-1">→</span>
                      <span className="font-bold">
                        {formatPinyin(hanzi.pinyin, hanzi.tone ?? 0)}
                      </span>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="button self-center"
        onClick={() => setCurrentStep(STARTER_STEP)}
      >
        reset
      </button>
    </>
  );
}
