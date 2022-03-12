import { LoaderIcon } from '../icons/LoaderIcon';

type props = {
  className?: string;
};

/**
 * A loading spinner for waiting steps
 */
export function LoadingSpinner({ className }: props) {
  return (
    <div
      className={`relative w-full flex-1 flex justify-center items-center overflow-hidden ${
        className ?? ''
      }`}
    >
      <p className="sr-only">Please wait a moment</p>
      <LoaderIcon className="animate-spin" />
    </div>
  );
}
