import ReactModal from 'react-modal';
import { CloseIcon } from '../icons/CloseIcon';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { ChevronLeftIcon } from '../icons/ChevronLeftIcon';
import { HanziObject } from '../types/HanziObject';
import { formatPinyin } from '../utils/formatPinyin';
import { formatPinyinSentence } from '../utils/formatPinyinSentence';
import { HanziGrid } from './HanziGrid';

/**
 * A needed method to anchor the modal to the root tag
 */
ReactModal.setAppElement('#root');

/**
 * The prop types of Modal component
 */
type Props = {
  selectedHanzi: HanziObject | undefined;
  isModalOpen: boolean;
  closeModal: () => void;
  selectNext: () => void;
  selectPrevious: () => void;
};

const fieldCells = {
  id: 'Identifiant',
  code: 'Unicode',
  key: 'Clef principale',
  strokes: 'Détail des traits',
  pinyin: 'Pinyin',
  tone: 'Ton',
  exampleSino: 'Exemple en sinogrammes',
  examplePinyin: 'Exemple en pinyin',
};

export function HanziDetailModal({
  isModalOpen,
  closeModal,
  selectedHanzi,
  selectNext,
  selectPrevious,
}: Props) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white outline-none xs:rounded-lg xs:w-max xs:h-max xs:p-12"
      overlayClassName="fixed inset-0 bg-neutral-500 bg-opacity-50"
    >
      {selectedHanzi && (
        <div className="h-full flex flex-col justify-center gap-8 items-center lg:flex-row">
          <HanziGrid className="font-hanzi text-11xl leading-none">
            {selectedHanzi.sinogram}
          </HanziGrid>
          <div className="grid grid-cols-3 gap-x-4 items-center justify-center text-2xl md:text-3xl">
            <Cell className="col-span-full text-5xl">
              {formatPinyin(selectedHanzi.pinyin, selectedHanzi.tone)}
            </Cell>
            <Separator />
            <Cell>Clef</Cell>
            <Cell className="col-span-2 font-hanziClassic">
              {selectedHanzi.key}
            </Cell>
            <Separator />
            <Cell>Traits</Cell>
            <Cell className="col-span-2 font-hanziClassic">
              {selectedHanzi.strokes}
            </Cell>
            <Separator />
            <Cell className="col-span-full font-hanziClassic text-3xl">
              {selectedHanzi.exampleSino}
            </Cell>
            <Cell className="col-span-full text-lg md:text-xl">
              {formatPinyinSentence(selectedHanzi.examplePinyin)}
            </Cell>
          </div>
        </div>
      )}
      <button
        className="absolute right-4 top-4 text-gray-500 text-3xl"
        onClick={closeModal}
      >
        <CloseIcon />
      </button>
      <button
        className="absolute right-0 top-1/2 text-gray-500 text-3xl"
        onClick={selectNext}
      >
        <ChevronRightIcon />
      </button>
      <button
        className="absolute left-0 top-1/2 text-gray-500 text-3xl"
        onClick={selectPrevious}
      >
        <ChevronLeftIcon />
      </button>
    </ReactModal>
  );
}

type CellProps = { children: JSX.Element | string; className?: string };

const Cell = ({ children, className }: CellProps) => (
  <p className={`text-center ${className ?? ''}`}>{children}</p>
);

const Separator = () => (
  <div className="w-full col-span-full border-t-2 border-gray-700 my-3"></div>
);
