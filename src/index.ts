import { useState, useEffect } from 'react';

export function createSharedState<ValueType>(defaultValue: ValueType) {
  type TListener = (value: ValueType) => void;

  const listeners: TListener[] = [];
  let backupValue = defaultValue;

  return (): [ValueType, React.Dispatch<React.SetStateAction<ValueType>>] => {
    const [value, setValue] = useState<ValueType>(backupValue);

    useEffect(() => {
      backupValue = value;
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
