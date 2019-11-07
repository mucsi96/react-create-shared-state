import { renderHook, act } from '@testing-library/react-hooks';
import { createSharedState } from '.';

const render = () => {
  const useSharedState = createSharedState();
  return renderHook(() => useSharedState());
};

describe('createSharedState', () => {
  it('rocks', () => {
    const { result } = render();
    expect(result.current).toEqual('test');
  });
});
