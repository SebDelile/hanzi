import { useState } from 'react';
import { WritingTestResultStep } from '../components/writingTest/WritingTestResultStep';
import { WritingTestStarterStep } from '../components/writingTest/WritingTestStarterStep';
import { WritingTestWorkingStep } from '../components/writingTest/WritingTestWorkingStep';
import {
  STARTER_STEP,
  WORKING_STEP,
  RESULT_STEP,
} from '../constants/testSteps';
import { HanziObject } from '../types/HanziObject';

export function WritingTest() {
  const [currentStep, setCurrentStep] = useState(STARTER_STEP);
  const [testSheet, setTestSheet] = useState<HanziObject[]>([]);

  const renderTestStep = () => {
    switch (currentStep) {
      case STARTER_STEP:
        return (
          <WritingTestStarterStep
            setCurrentStep={setCurrentStep}
            setTestSheet={setTestSheet}
          />
        );
      case WORKING_STEP:
        return (
          <WritingTestWorkingStep
            testSheet={testSheet}
            setCurrentStep={setCurrentStep}
          />
        );
      case RESULT_STEP:
        return (
          <WritingTestResultStep
            testSheet={testSheet}
            setCurrentStep={setCurrentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full mx-auto flex flex-col items-center flex-grow">
      <h1 className="h1">{"Test d'écriture"}</h1>
      <article
        className={`flex flex-grow flex-col items-center justify-center flew-grow mx-auto gap-6 ${
          currentStep === RESULT_STEP ? 'max-w-3xl w-full' : 'max-w-xl'
        }`}
      >
        {renderTestStep()}
      </article>
    </section>
  );
}
