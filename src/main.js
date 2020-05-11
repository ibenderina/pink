import '../source/style.scss';

const showOpinion = () => {
    const opinionsToggle = document.querySelectorAll(`.opinions__toggle`);
    setClickOpinionRadioHandler(opinionsToggle);
};

const removeElement = (element) => {
    element.remove();
};

const setClickOpinionRadioHandler = (element) => {
    element.addEventListener(`click`, () => {
        const opinion = document.querySelectorAll(`.opinion`);
        if (opinion) {
            opinion.forEach((element) => {
                removeElement();
            });
        }
    });
};
