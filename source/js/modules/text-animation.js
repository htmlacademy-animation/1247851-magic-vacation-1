export const accentTypographyBuild = (
    elementSelector,
    timer,
    property,
    delay
) => {
  const element = document.querySelector(elementSelector);
  const text = [element.textContent];

  const getRandom = (min, max) => {
    const random = Math.floor(Math.random() * (max - min) + min);
    return Math.floor(random / min) * min;
  };

  const createElement = (letter, wordLength, numberWord) => {
    const span = document.createElement(`span`);
    const msForLetter = 25;
    const randomDelay = getRandom(msForLetter, wordLength * msForLetter);

    span.textContent = letter;
    span.style.transition = `${property} ${timer}ms ease ${
      numberWord * (wordLength * msForLetter) + delay + randomDelay
    }ms`;

    if (letter === ` `) {
      span.classList.add(`space`);
    }

    return span;
  };

  const content = text.reduce((fragmentParent, word, numberWord) => {
    const wordElement = Array.from(word).reduce(
        (fragment, latter, _index, arr) => {
          fragment.appendChild(createElement(latter, arr.length, numberWord));
          return fragment;
        },
        document.createDocumentFragment()
    );
    const wordContainer = document.createElement(`span`);
    wordContainer.classList.add(`animation-text__word`);
    wordContainer.appendChild(wordElement);
    fragmentParent.appendChild(wordContainer);

    return fragmentParent;
  }, document.createDocumentFragment());

  element.innerHTML = ``;
  element.appendChild(content);
};
