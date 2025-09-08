import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getPlans } from './plans';

beforeEach(() => {
  global.fetch = vi.fn();
});
afterEach(() => {
  vi.resetAllMocks();
});

describe('getPlans', () => {
  it('should return plans list when fetch is successful', async () => {
    const mockPlans = { list: [{ name: 'Plan 1' }, { name: 'Plan 2' }] };
    global.fetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockPlans),
    });
    const result = await getPlans();
    expect(result).toEqual(mockPlans.list);
  });

  it('should return empty array when fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
    const result = await getPlans();
    expect(result).toEqual([]);
  });
});
