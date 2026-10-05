import test from 'node:test';
import assert from 'node:assert/strict';
import { databaseOptions } from '../server/db.mjs';
import { nextAssessmentDate, validateRating, ApiError } from '../server/security.mjs';

test('andmebaasi seadistus nõuab parooli ega leki vaikimisi väärtust', () => {
  assert.throws(() => databaseOptions({ DB_HOST: 'host', DB_NAME: 'db', DB_USER: 'user' }), /keskkonnamuutujad/);
  const options = databaseOptions({ DB_HOST: 'host', DB_NAME: 'db', DB_USER: 'user', DB_PASSWORD: 'secret', DB_PORT: '3306' });
  assert.equal(options.password, 'secret');
  assert.equal(options.port, 3306);
});

test('hinded on piiratud lubatud skaalale', () => {
  assert.equal(validateRating(2.5), 2.5);
  assert.throws(() => validateRating(4), ApiError);
});

test('järgmine hindamine arvutatakse kolme kuu järgi', () => {
  assert.equal(nextAssessmentDate('2026-10-04'), '2027-01-04');
  assert.equal(nextAssessmentDate('2026-11-30'), '2027-02-28');
});
