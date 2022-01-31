const MAIN_KEY = 'ANSWERS';

/**
 * Remove all the answers locally stored
 * 
 * @returns {void}
 */
const revoke = () => localStorage.removeItem(MAIN_KEY);

/**
 * Gets all the answers
 * 
 * @returns {string[]} All the answers
 */
const retrieve = () => {
    let rawAnswers = localStorage.getItem(MAIN_KEY);
    if (!rawAnswers) rawAnswers = '[]';

    const parsedAnswers = JSON.parse(rawAnswers);

    return parsedAnswers;
}

/**
 * Returns the current timestamp
 * 
 * @returns {number}
 */
const now = () => new Date().getTime();

/**
 * Saves the global state
 * 
 * @param {Object} rawState 
 * 
 * @returns {void}
 */
const saveState = rawState => {
    const preparedState = JSON.stringify(rawState);
    localStorage.setItem(MAIN_KEY, preparedState);
}

/**
 * Creates the answer object
 * 
 * @param {string} answer The answer
 * @param {string} lang The lang of the answer, "en" by default
 * 
 * @returns {Object}
 */
const createAnswer = (answer, lang = "en") => {
    return {
        lang,
        answer,
        time: now(),
    }
}

/**
 * Stores a new answer
 * 
 * @param {string} answer The answer to append
 * 
 * @returns {void}
 */
const store = (answer) => {
    const answerObject = createAnswer(answer);

    const storedAnswers = retrieve();
    storedAnswers.push(answerObject);

    saveState(storedAnswers);
}