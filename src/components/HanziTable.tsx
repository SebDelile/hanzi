import { useFetch } from '../utils/useFetch';
import { LoadingSpinner } from './LoadingSpinner';

export function HanziTable() {
  const { isLoading, data, isError } = useFetch('database.json');
  return (
    <main className="w-full">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        "une erreur s'est produite"
      ) : (
        <ul>
          {data?.map((hanzi) => (
            <li key={hanzi.code}>{hanzi.sinogram}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
