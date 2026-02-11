import { getHealthStatus } from '../health.js';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Воин', health: 51 }, 'healthy'],
  [{ name: 'Лучник', health: 50 }, 'wounded'],
  [{ name: 'Вор', health: 15 }, 'wounded'],
  [{ name: 'Лекарь', health: 14 }, 'critical'],
  [{ name: 'Мертвец', health: 0 }, 'critical'],
])('testing health status for %s', (character, expected) => {
  expect(getHealthStatus(character)).toBe(expected);
});
