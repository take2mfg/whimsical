import { Greeter } from '../components';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
