import { STARTER_STEP } from '../../constants/testSteps';
import { HanziObject } from '../../types/HanziObject';
import { HanziTile } from '../HanziTile';

type Props = {
  testSheet: HanziObject[];
  setCurrentStep: (step: string) => void;
};

export function WritingTestResultStep({ testSheet, setCurrentStep }: Props) {
  return (
    <>
      <h2 className="h2">{`Réponses :`}</h2>
      <ul className="grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-4 md:grid-cols-5 gap-4 mx-auto justify-items-stretch w-full">
        {testSheet?.map((hanzi) => (
          <HanziTile key={hanzi.id} hanzi={hanzi} />
        ))}
      </ul>
      <button
        className="button self-center"
        onClick={() => setCurrentStep(STARTER_STEP)}
      >
        reset
      </button>
    </>
  );
}
