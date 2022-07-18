import { createContext, useContext } from 'react';
import { useFetch } from '../utils/useFetch';
import { HanziObject } from '../types/HanziObject';

type ContextType = {
  data: HanziObject[] | undefined;
  isError: Boolean;
  isLoading: Boolean;
};

const HanziContext = createContext({} as ContextType);

type Props = {
  children: JSX.Element;
};

export function HanziContextProvider({ children }: Props) {
  const contextValue: ContextType = useFetch('database.json');
  return (
    <HanziContext.Provider value={contextValue}>
      {children}
    </HanziContext.Provider>
  );
}

/**
 * custom hook to call the context data. throw an error if there is no provider in the tree.
 */
export function useHanzi() {
  const getHanzi = useContext(HanziContext);
  if (!getHanzi) {
    throw new Error(
      'useGlobalContext hookcan only be called within a GlobalContext'
    );
  }
  return getHanzi;
}
