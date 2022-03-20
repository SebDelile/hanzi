import { useState } from 'react';
import { HanziObject } from '../types/HanziObject';
import { useFetch } from '../utils/useFetch';
import { HanziDetailModal } from './HanziDetailModal';
import { HanziTile } from './HanziTile';
import { LoadingSpinner } from './LoadingSpinner';

export function HanziTable() {
  const { isLoading, data, isError } = useFetch('database.json');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHanzi, setSelectedHanzi] = useState<HanziObject | undefined>(
    undefined
  );

  /**
   * the method to open the modal and set a message into it (success or failure)
   */
  const openModal = (hanzi: HanziObject): void => {
    setSelectedHanzi(hanzi);
    setIsModalOpen(true);
  };

  /**
   * the method to close the modal and reset the message
   */
  const closeModal = (): void => {
    setSelectedHanzi(undefined);
    setIsModalOpen(false);
  };

  return (
    <main className="w-full py-4 mt-20">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>{"une erreur s'est produite"}</p>
      ) : (
        <ul className="first-child grid grid-cols-2 xxs:grid-cols-3 xs:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-4 mx-auto">
          {data?.map((hanzi) => (
            <HanziTile key={hanzi.id} hanzi={hanzi} handleClick={openModal} />
          ))}
        </ul>
      )}
      <HanziDetailModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedHanzi={selectedHanzi}
      />
    </main>
  );
}
