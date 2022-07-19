import { workingStep } from '../constants/testSteps';

type Props = {
  setCurrentStep: (step: string) => void;
};

export function ReadingTestStarterStep({ setCurrentStep }: Props) {
  return (
    <>
      <div>Starter step</div>
      <button onClick={() => setCurrentStep(workingStep)}>start</button>
    </>
  );
}
