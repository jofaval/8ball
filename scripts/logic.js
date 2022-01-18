const answers = [
    // YES
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',

    // MAYBE
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',

    // NO
    'Don\'t count on it.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful. ',
];
const answersLen = answers.length;

/**
 * Returns a string
 * 
 * @returns {string}
 */
const getAnAnswer = () => {
    const randomIndex = Math.floor( Math.random() * answersLen );

    const answer = answers[randomIndex];

    return answer;
}