import { useState } from 'react';
import { ReadingTestResultStep } from '../components/ReadingTestResultStep';
import { ReadingTestStarterStep } from '../components/ReadingTestStarterStep';
import { ReadingTestWorkingStep } from '../components/ReadingTestWorkingStep';
import { starterStep, workingStep, resultStep } from '../constants/testSteps';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';

export function ReadingTest() {
  const [currentStep, setCurrentStep] = useState(starterStep);
  const [testSheet, setTestSheet] = useState<readingTestSheetItem[]>([]);

  const renderTestStep = () => {
    switch (currentStep) {
      case starterStep:
        return (
          <ReadingTestStarterStep
            setCurrentStep={setCurrentStep}
            setTestSheet={setTestSheet}
          />
        );
      case workingStep:
        return <ReadingTestWorkingStep setCurrentStep={setCurrentStep} />;
      case resultStep:
        return <ReadingTestResultStep setCurrentStep={setCurrentStep} />;
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
