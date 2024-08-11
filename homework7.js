function findWordsWithoutA(text) {
  const regex = /\b[^aA\s]{6,}\b/g;

  const matches = text.match(regex);

  return matches || [];
}

const text = "Wonderful Happiness Joyful Time Task Apple";
const result = findWordsWithoutA(text);

console.log(result);
