const words = ['REACT', 'JAVASCRIPT', 'COMPONENT', 'STATE', 'PROPS', 'HOOK', 'FUNCTION', 'ARRAY', 'OBJECT', 'STRING'];

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
