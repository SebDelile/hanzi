import ReactModal from 'react-modal';
import { HanziObject } from '../types/HanziObject';

/**
 * A needed method to anchor the modal to the root tag
 */
ReactModal.setAppElement('#root');

/**
 * The prop types of Modal component
 */
type Props = {
  hanzi: HanziObject;
  isModalOpen: boolean;
  closeModal: () => void;
};

export function HanziDetailModal({ isModalOpen, closeModal, hanzi }: Props) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white rounded-lg p-8 outline-none"
      overlayClassName="fixed inset-0 bg-neutral-500 bg-opacity-50"
    ></ReactModal>
  );
}
