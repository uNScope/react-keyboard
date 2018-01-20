import { generateLetters, resetLetters, checkLetter} from './letters'

describe('>>> ACTIONS  Test letters actions', () => {
  test('+++ actionCreator generateLetters', () => {
    const action = generateLetters();
    expect(action).toEqual({ type: "GENERATE_LETTERS" })
  });

  test('+++ actionCreator resetLetters', () => {
    const action = resetLetters();
    expect(action).toEqual({ type: "RESET_LETTERS" })
  });

  test('+++ actionCreator checkLetter', () => {
    const action = checkLetter('a');
    expect(action).toEqual({ type: "CHECK_LETTER", letter: 'a' });
  });
});

