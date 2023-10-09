import { render, screen } from '@testing-library/react';
import App, {validPassword, validEmail, validLogin} from './App';

test('rejects short password', () => {
  let password = ''
  expect(
    validPassword(password)).toBe(false);
})
;

test('accepts password with length greater than 0', () => {
  let password = 'a'
  expect(
    validPassword(password)).toBe(true);
});

test('rejects badly formated email', () => {
  let email = 'athing.com'
  expect(
    validEmail(email)).toBe(false);
});

test('accepts correctly formatted email', () => {
  let email = 'stuff@athing.com'
  expect(
    validEmail(email)).toBe(true);
});

test('accepts a correctly formatted email and password', () => {
  let email = 'stuff@athing.com'
  let password = "password"
  expect(
    validLogin(password, email)).toBe(true);
});

