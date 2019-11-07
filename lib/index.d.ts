/// <reference types="react" />
export declare function createSharedState<ValueType>(
  initialState: ValueType
): () => [ValueType, import('react').Dispatch<import('react').SetStateAction<ValueType>>];
