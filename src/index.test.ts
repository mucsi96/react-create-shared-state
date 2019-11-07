import { renderHook, act } from '@testing-library/react-hooks';
import { createSharedState } from '.';

const render = <ValueType>(initialState: ValueType | undefined = undefined) => {
  const useSharedState = createSharedState<ValueType | undefined>(initialState);
  return renderHook(() => useSharedState());
};

describe('createSharedState', () => {
  it('returns undefined if initial state is not set', () => {
    const { result } = render();
    const [value] = result.current;
    expect(value).toBe(undefined);
  });

  it('returns initial state', () => {
    const { result } = render('initial value');
    const [value] = result.current;
    expect(value).toBe('initial value');
  });

  it('returns set state', () => {
    const { result } = render('initial value');
    const [, setValue] = result.current;

    act(() => setValue('set value'));

    const [value] = result.current;

    expect(value).toBe('set value');
  });

  it('returns set state in other component', () => {
    const useSharedState = createSharedState('initial value');
    const { result: resultA } = renderHook(() => useSharedState());
    const { result: resultB } = renderHook(() => useSharedState());
    const [, setValue] = resultA.current;

    act(() => setValue('set value from A'));

    const [value] = resultB.current;

    expect(value).toBe('set value from A');
  });
});
