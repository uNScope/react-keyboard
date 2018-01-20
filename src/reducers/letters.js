export const TOTAL_STRLEN = 8;

export const initialState = {
  items: [],
  wrongKeys: 0
};

export function generateLetters() {
  let letters = [];
  for(let key = 0; key < TOTAL_STRLEN; key++) {
    letters.push(Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1));
  }
  return letters;
}

export function checkLetter(char, items) {
  return !items ? [] : items[0] === char ? items.slice(1) : items;
}

const letters = (state = initialState, action) => {
  switch (action.type) {
    case 'GENERATE_LETTERS':
      return {
        ...state,
        items: generateLetters()
      };

    case 'CHECK_LETTER':
      let checked = checkLetter(action.letter, state.items);
      return {
        ...state,
        items: checked,
        wrongKeys: checked.length === state.items.length
          ? ++state.wrongKeys
          : state.wrongKeys
      };

    case 'RESET_LETTERS':
      return {...initialState};

    default:
      return state
  }
};

export default letters;
