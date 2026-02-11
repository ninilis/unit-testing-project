import { getHealthStatus } from '../health.js';

describe('getHealthStatus function', () => {
  test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Воин', health: 51 })).toBe('healthy');
    expect(getHealthStatus({ name: 'Лучник', health: 100 })).toBe('healthy');
  });

  test('should return "wounded" for health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Воин', health: 30 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
  });

  test('should return "critical" for health < 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Воин', health: 10 })).toBe('critical');
    expect(getHealthStatus({ name: 'Лучник', health: 0 })).toBe('critical');
    expect(getHealthStatus({ name: 'Мертвец', health: -5 })).toBe('critical');
  });

  test('should work with different character objects', () => {
    expect(getHealthStatus({ name: 'Test', health: 75 })).toBe('healthy');
    expect(getHealthStatus({ health: 40 })).toBe('wounded');
    expect(getHealthStatus({})).toBe('critical');
  });
});
