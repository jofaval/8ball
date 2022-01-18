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
 * Stores a new answer
 * 
 * @param {string} answer The answer to append
 * 
 * @returns {void}
 */
const store = (answer) => {
    const answerObject = {
        lang: "en",
        answer,
        time: now(),
    };
    
    const storedAnswers = retrieve();
    storedAnswers.push(answerObject);

    const preparedAnswers = JSON.stringify(storedAnswers);
    localStorage.setItem(MAIN_KEY, preparedAnswers);
}