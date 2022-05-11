import { Hello } from '../src/index';
test('Hello', () => {
  expect(Hello('Carl')).toBe('Hello Carl');
});
