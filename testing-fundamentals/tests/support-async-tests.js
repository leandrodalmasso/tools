const { sumAsync, subAsync } = require('../math');

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subAsync subtracts numbers asynchronously', async () => {
  const result = await subAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// callback will return a promise
async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}