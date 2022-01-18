/**
 * Displays an answer
 * 
 * @param {string} answer The answer to display
 * 
 * @returns {void}
 */
const displayAnswer = (answer) => {
    const answerContainer = document.querySelector('#answer');
    if (!answerContainer) return;

    answerContainer.innerHTML = answer;
}

/**
 * Register the given answer
 * 
 * @param {string} answer The answer to store
 * 
 * @returns {void}
 */
const registerAnswer = (answer) => {
    store(answer);
}

/**
 * The answer button event
 * 
 * @param {Event} e The button event
 * 
 * @returns {void}
 */
const answerButtonEvent = (e) => {
    const answer = getAnAnswer();
    console.log('An answer was given', answer);

    displayAnswer(answer);

    // Execute only after the event is done
    registerAnswer(answer);
}

// All the recornized click events, one will exclude the other
const clickEvents = [
    'click',
    'touchstart',
];

/**
 * Configures the interaction
 * 
 * @returns {void}
 */
const configureInteraction = () => {
    if (!document) return;

    const answerButton = document.querySelector('#btnAnswer');
    if (!answerButton) return;

    clickEvents.map(clickEvent =>
        answerButton.addEventListener(clickEvent, answerButtonEvent)
    );
}
configureInteraction();