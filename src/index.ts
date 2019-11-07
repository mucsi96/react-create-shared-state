import { useState, useEffect } from 'react';

export function createSharedState<ValueType>(initialState: ValueType) {
  type TListener = (value: ValueType) => void;

  const listeners: TListener[] = [];

  return (): [ValueType, React.Dispatch<React.SetStateAction<ValueType>>] => {
    const [value, setValue] = useState<ValueType>(initialState);

    useEffect(() => {
      listeners.forEach(listener => listener !== setValue && listener(value));
    }, [value]);

    useEffect(() => {
      listeners.push(setValue);

      return () => {
        const index = listeners.findIndex(listener => listener === setValue);
        listeners.splice(index, 1);
      };
    }, []);

    return [value, setValue];
  };
}
