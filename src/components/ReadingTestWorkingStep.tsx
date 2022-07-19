import { starterStep, resultStep } from '../constants/testSteps';

type Props = {
  setCurrentStep: (step: string) => void;
};

export function ReadingTestWorkingStep({ setCurrentStep }: Props) {
  return (
    <>
      <div>Working step</div>
      <button onClick={() => setCurrentStep(starterStep)}>reset</button>
      <button onClick={() => setCurrentStep(resultStep)}>finish</button>
    </>
  );
}
