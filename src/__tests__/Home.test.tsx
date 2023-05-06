import { expect, it, describe, assert } from 'vitest';

describe('very complicated, much tests', () => {
  it('foo', () => {
    expect(1 + 1).toEqual(2);
    expect(true).to.be.true;
  });

  it('bar', () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it('very wow', () => {
    expect({ foo: 'bar' }).toMatchSnapshot();
  });

  it('neo is real', () => {
    expect(1).toBe(1);
  });
});
