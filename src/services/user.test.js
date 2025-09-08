import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getUser } from './user';

beforeEach(() => {
  global.fetch = vi.fn();
});
afterEach(() => {
  vi.resetAllMocks();
});

describe('getUser', () => {
  it('should return user when fetch is successful', async () => {
    const mockUser = { name: 'Juan', dni: '12345678' };
    global.fetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce(mockUser),
    });
    const result = await getUser();
    expect(result).toEqual(mockUser);
  });

  it('should return null when fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
    const result = await getUser();
    expect(result).toBeNull();
  });
});
