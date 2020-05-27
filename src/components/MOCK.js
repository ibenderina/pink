export const getRandomIntegerNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
    const randomIndex = getRandomIntegerNumber(0, array.length);
    return array[randomIndex];
};

const TEXT = [
    `Мне нечего сказать`,
    `Приложение очень нравится, хорошее`,
    `Приложение совсем не нравится, плохое`,
    `Кто здесь?!`,
];

const NAMES = [`Собаня `, `Котенька`, `Попуг`, `Пчелка`];

const PERSONS = [`Тракторист, 47 лет`, `Супермодель, 22 года`, `Алкоголик, 29 лет`, `Генеральный директор, 12 лет`];

export const generateOpinion = () => {
    return {
        id: String(new Date() + Math.random()),
        text: getRandomArrayItem(TEXT),
        name: getRandomArrayItem(NAMES),
        person: getRandomArrayItem(PERSONS)
    };
};

export const generateOpinions = (count) => {
    return new Array(count)
        .fill(``)
        .map(generateOpinion);
};
