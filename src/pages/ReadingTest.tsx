import { useState } from 'react';
import { ReadingTestResultStep } from '../components/ReadingTestResultStep';
import { ReadingTestStarterStep } from '../components/ReadingTestStarterStep';
import { ReadingTestWorkingStep } from '../components/ReadingTestWorkingStep';
import {
  STARTER_STEP,
  WORKING_STEP,
  RESULT_STEP,
} from '../constants/testSteps';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';

export function ReadingTest() {
  const [currentStep, setCurrentStep] = useState(STARTER_STEP);
  const [testSheet, setTestSheet] = useState<readingTestSheetItem[]>([]);

  const renderTestStep = () => {
    switch (currentStep) {
      case STARTER_STEP:
        return (
          <ReadingTestStarterStep
            setCurrentStep={setCurrentStep}
            setTestSheet={setTestSheet}
          />
        );
      case WORKING_STEP:
        return (
          <ReadingTestWorkingStep
            testSheet={testSheet}
            setTestSheet={setTestSheet}
            setCurrentStep={setCurrentStep}
          />
        );
      case RESULT_STEP:
        return (
          <ReadingTestResultStep
            testSheet={testSheet}
            setCurrentStep={setCurrentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="mx-auto flex flex-col items-center flex-grow">
      <h1 className="h1">{'Test de lecture'}</h1>
      <article className="flex flex-grow">{renderTestStep()}</article>
    </section>
  );
}
