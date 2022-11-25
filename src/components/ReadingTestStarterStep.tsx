import { useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import { WORKING_STEP } from '../constants/testSteps';
import { useHanzi } from '../contexts/HanziContext';
import { HanziObject } from '../types/HanziObject';
import { readingTestSheetItem } from '../types/ReadingTestSheetItem';
import { pickRandomHanziSelection } from '../utils/pickRandomHanziSelection';

type Props = {
  setCurrentStep: (step: string) => void;
  setTestSheet: (testSheet: readingTestSheetItem[]) => void;
};

const selectOptions = [5, 10, 20, 30, 40, 50].map((value) => ({
  value,
  label: value.toString(),
}));

const initialSelectValue = selectOptions.find(({ value }) => value === 10);

export function ReadingTestStarterStep({
  setCurrentStep,
  setTestSheet,
}: Props) {
  const [selectValue, setSelectValue] = useState(initialSelectValue);
  const { data, isError, isLoading } = useHanzi();

  // reset the test sheet on mounting
  useEffect(() => setTestSheet([]), []);

  function onStart() {
    const hanziCount = selectValue?.value;
    if (!isLoading && !isError && data && hanziCount) {
      const hanziSelection = pickRandomHanziSelection(data, hanziCount);
      setTestSheet(
        hanziSelection.map((hanzi) => ({ hanzi, pinyin: '', tone: null }))
      );
      setCurrentStep(WORKING_STEP);
    }
  }

  return (
    <>
      <label htmlFor="select-hanzi-quantity">
        {'Combien de hanzis inclure dans le test?'}
      </label>
      <ReactSelect
        id="select-hanzi-quantity"
        className="w-full"
        options={selectOptions}
        value={selectValue}
        onChange={(option) => {
          if (option) setSelectValue(option);
        }}
      />
      <button className="button self-center" onClick={onStart}>
        {'Commencer le test'}
      </button>
    </>
  );
}
