import { useState } from 'react';
import { STARTER_STEP, RESULT_STEP } from '../../constants/testSteps';
import { formatPinyin } from '../../utils/formatPinyin';
import { HanziObject } from '../../types/HanziObject';

type Props = {
  testSheet: HanziObject[];
  setCurrentStep: (step: string) => void;
};

export function WritingTestWorkingStep({ testSheet, setCurrentStep }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleGoNext() {
    if (currentQuestion < testSheet.length - 1)
      setCurrentQuestion((prev) => prev + 1);
    else setCurrentStep(RESULT_STEP);
  }

  const { sinogram, pinyin, tone, exampleSino } = testSheet[currentQuestion];

  return (
    <>
      <h2 className="h2">{`Question ${currentQuestion + 1} sur ${
        testSheet.length
      }`}</h2>
      <div className="w-full">
        <p className="text-8xl text-center leading-loose">
          {formatPinyin(pinyin, tone)}
        </p>
        <div className="flex text-center items-center h-10 gap-4">
          <p className="flex-1 text-4xl font-bold leading-loose flex gap-2 justify-center items-center">
            {exampleSino
              .split('')
              .map((sino) =>
                sino === sinogram ? (
                  <span className="text-gray-500 font-normal text-3xl">
                    {formatPinyin(pinyin, tone)}
                  </span>
                ) : (
                  <span>{sino}</span>
                )
              )}
          </p>
        </div>
      </div>
      <div className="flex justify-stretch items-center gap-4">
        <button
          className="button-outline flex-1"
          onClick={() => {
            setCurrentStep(STARTER_STEP);
          }}
        >
          Réinitialiser
        </button>
        <button className="button flex-1" onClick={handleGoNext}>
          {currentQuestion === testSheet.length - 1 ? 'Terminer' : 'Suivant'}
        </button>
      </div>
    </>
  );
}
