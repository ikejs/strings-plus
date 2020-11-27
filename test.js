require('../umd/strings-plus');

test('Uppercases the first character of string', () => {
  expect("hello world".capitalize()).toBe("Hello world");
});

test('Uppercases the first letter of each word in a string', () => {
  expect("the quick brown fox".capitalizeEachWord()).toBe("The Quick Brown Fox");
});

test('Uppercases every other letter', () => {
  expect("abcdefg".capitalizeEveryOther()).toBe("aBcDeFg");
});

test('Removes all whitespace from string', () => {
  expect("the quick brown fox with no spaces".removeWhitespace()).toBe("thequickbrownfoxwithnospaces");
});

test('Removes only the extra whitespace from a string', () => {
  expect("this sentence      had    too        much  space".removeExtraSpace()).toBe("this sentence had too much space");
});