export const generateLetters = () => {
  return {
    type: 'GENERATE_LETTERS'
  }
};

export const resetLetters = () => {
  return {
    type: 'RESET_LETTERS'
  }
};

export const checkLetter = (letter) => {
  return {
    type: 'CHECK_LETTER',
    letter: letter
  }
};

