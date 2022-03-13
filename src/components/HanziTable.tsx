import { useFetch } from '../utils/useFetch';
import { HanziTile } from './HanziTile';
import { LoadingSpinner } from './LoadingSpinner';

export function HanziTable() {
  const { isLoading, data, isError } = useFetch('database.json');
  return (
    <main className="w-full py-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>{"une erreur s'est produite"}</p>
      ) : (
        <ul className="first-child grid grid-cols-8 gap-4 mx-auto">
          {data?.map((hanzi) => (
            <HanziTile key={hanzi.id} hanzi={hanzi} />
          ))}
        </ul>
      )}
    </main>
  );
}
