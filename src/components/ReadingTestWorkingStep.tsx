import { useRef, useState } from 'react';
import { STARTER_STEP, RESULT_STEP } from '../constants/testSteps';
import { InformationIcon } from '../icons/InformationIcon';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';
import { formatPinyin } from '../utils/formatPinyin';
import { parsePinyinTone } from '../utils/parsePinyinTone';
import { HanziGrid } from './HanziGrid';

type Props = {
  testSheet: readingTestSheetItem[];
  setTestSheet: (testSheet: readingTestSheetItem[]) => void;
  setCurrentStep: (step: string) => void;
};

const INITIAL_CURRENT_ANSWER = '';
const INITIAL_IS_TOUCHED = false;
const INITIAL_IS_ERROR = true;

export function ReadingTestWorkingStep({
  testSheet,
  setTestSheet,
  setCurrentStep,
}: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(INITIAL_CURRENT_ANSWER);
  const [isTouched, setIsTouched] = useState(INITIAL_IS_TOUCHED);
  const [isError, setIsError] = useState(INITIAL_IS_ERROR);
  const inputElement = useRef<HTMLInputElement>(null);

  function handleChangeCurrentAnswer(event: React.FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    setCurrentAnswer(value);
    if (!value || parsePinyinTone(value)[0] === 'invalid') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  function handleSubmitAnswer() {
    if (!isTouched) {
      setIsTouched(true);
    }
    if (currentAnswer && !isError) {
      const modifiedTestSheet = [...testSheet];
      const [pinyin, tone] = parsePinyinTone(currentAnswer);
      modifiedTestSheet[currentQuestion].pinyin = pinyin;
      modifiedTestSheet[currentQuestion].tone = tone;
      setTestSheet(modifiedTestSheet);

      if (currentQuestion === testSheet.length - 1) {
        setCurrentStep(RESULT_STEP);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAnswer(INITIAL_CURRENT_ANSWER);
        setIsTouched(INITIAL_IS_TOUCHED);
        setIsError(INITIAL_IS_ERROR);
      }
    }
    if (inputElement && inputElement.current) {
      inputElement.current.focus();
    }
  }

  return (
    <>
      <h2 className="h2">{`Question ${currentQuestion + 1} sur ${
        testSheet.length
      }`}</h2>
      <div>
        <HanziGrid className="font-hanzi text-11xl leading-none">
          {testSheet[currentQuestion].hanzi.sinogram}
        </HanziGrid>
        <div className="flex text-center items-center h-10">
          <p className="flex-1 text-xl">Réponse :</p>
          <p className="flex-1 text-3xl font-bold">
            {!isError
              ? formatPinyin(...parsePinyinTone(currentAnswer))
              : isTouched
              ? '#####'
              : ''}
          </p>
        </div>
      </div>
      <div className="relative py-6 flex items-center gap-4">
        <input
          id="input-answer"
          className="p-2 rounded-md"
          type="text"
          ref={inputElement}
          onBlur={() => setIsTouched(true)}
          onChange={handleChangeCurrentAnswer}
          value={currentAnswer}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleSubmitAnswer();
            }
          }}
        />
        <InformationIcon className="peer text-xl" />
        <label
          htmlFor="input-answer"
          className="invisible peer-hover:visible italic absolute top-0 left-0"
        >
          {'Exemple : "wang3"'}
        </label>
        <p className="absolute bottom-0 left-0 text-primary">
          {isTouched && isError ? 'Format incorrect' : ''}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          className="button-outline flex-1"
          onClick={() => {
            setCurrentStep(STARTER_STEP);
          }}
        >
          Réinitialiser
        </button>
        <button className="button flex-1" onClick={handleSubmitAnswer}>
          {currentQuestion === testSheet.length - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </>
  );
}
