import { useState } from 'react';
import { starterStep, resultStep } from '../constants/testSteps';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';
import { formatPinyin } from '../utils/formatPinyin';
import { parsePinyinTone } from '../utils/parsePinyinTone';
import { HanziGrid } from './HanziGrid';

type Props = {
  testSheet: readingTestSheetItem[];
  setTestSheet: (testSheet: readingTestSheetItem[]) => void;
  setCurrentStep: (step: string) => void;
};

export function ReadingTestWorkingStep({
  testSheet,
  setTestSheet,
  setCurrentStep,
}: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isError, setIsError] = useState(true);

  function handleChangeCurrentAnswer(event: React.FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setCurrentAnswer(value);
    if (!value || parsePinyinTone(value)[0] === 'invalid') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  function handleSaveCurrentAnswer() {
    const modifiedTestSheet = [...testSheet];

    const [pinyin, tone] = parsePinyinTone(currentAnswer);
    modifiedTestSheet[currentQuestion].pinyin = pinyin;
    modifiedTestSheet[currentQuestion].tone = tone;
    setTestSheet(modifiedTestSheet);
  }

  function handleNextQuestion() {
    if (!isError) {
      handleSaveCurrentAnswer();
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer('');
      setIsTouched(false);
    }
  }

  function handleFinish() {
    if (!isError) {
      handleSaveCurrentAnswer();
      setCurrentStep(resultStep);
    }
  }

  return (
    <>
      <h2>{`Question ${currentQuestion + 1} sur ${testSheet.length}`}</h2>
      <article>
        <HanziGrid className="font-hanzi text-11xl leading-none">
          {testSheet[currentQuestion].hanzi.sinogram}
        </HanziGrid>
        <p>{`Réponse : ${
          !isError
            ? formatPinyin(...parsePinyinTone(currentAnswer))
            : isTouched
            ? '#####'
            : ''
        }`}</p>
        <div>
          <label>
            {
              'Réponse au format pinyin et ton à la suite sans espace (exemple : "wang3")'
            }
          </label>
          <input
            type="text"
            onBlur={() => setIsTouched(true)}
            onChange={handleChangeCurrentAnswer}
            value={currentAnswer}
          />
          <p>
            {isTouched && isError
              ? 'le format de la réponse est incorrect'
              : ''}
          </p>
        </div>
      </article>
      <article>
        <button
          className="button"
          onClick={() => {
            setCurrentStep(starterStep);
          }}
        >
          Réinitialiser
        </button>
        {currentQuestion === testSheet.length - 1 ? (
          <button className="button" onClick={handleFinish}>
            Terminer
          </button>
        ) : (
          <button className="button" onClick={handleNextQuestion}>
            Question suivante
          </button>
        )}
      </article>
    </>
  );
}
