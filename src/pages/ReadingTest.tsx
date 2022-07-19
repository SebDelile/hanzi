import { useState } from 'react';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ReadingTestResultStep } from '../components/ReadingTestResultStep';
import { ReadingTestStarterStep } from '../components/ReadingTestStarterStep';
import { ReadingTestWorkingStep } from '../components/ReadingTestWorkingStep';
import { useHanzi } from '../contexts/HanziContext';
import { HanziObject } from '../types/HanziObject';
import { starterStep, workingStep, resultStep } from '../constants/testSteps';

type readingTestSheetItem = {
  hanzi: HanziObject;
  pinyin: string;
  tone: number;
};

export function ReadingTest() {
  const { data, isError, isLoading } = useHanzi();
  const [currentStep, setCurrentStep] = useState(starterStep);
  const [testSheet, setTestSheet] = useState<readingTestSheetItem[]>([]);

  const renderTestStep = () => {
    switch (currentStep) {
      case starterStep:
        return <ReadingTestStarterStep setCurrentStep={setCurrentStep} />;
      case workingStep:
        return <ReadingTestWorkingStep setCurrentStep={setCurrentStep} />;
      case resultStep:
        return <ReadingTestResultStep setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>{"une erreur s'est produite"}</p>
      ) : (
        renderTestStep()
      )}
    </>
  );
}
