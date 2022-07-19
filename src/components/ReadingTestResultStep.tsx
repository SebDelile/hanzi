import { starterStep } from '../constants/testSteps';

type Props = {
  setCurrentStep: (step: string) => void;
};

export function ReadingTestResultStep({ setCurrentStep }: Props) {
  return (
    <>
      <div>Result step</div>
      <button onClick={() => setCurrentStep(starterStep)}>reset</button>
    </>
  );
}
