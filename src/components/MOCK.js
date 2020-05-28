export const getRandomIntegerNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
};

export const getRandomArrayItem = (array) => {
    const randomIndex = getRandomIntegerNumber(0, array.length);
    return array[randomIndex];
};

const TEXT = [
    `Замученный дорогой, я выбился из сил. И в доме лесника я ночлега попросил. С улыбкой добродушной старик меня пустил. И жестом дружелюбным на ужин пригласил.`,
    `Я нужен сразу всем, покуда есть деньжата, покуда есть хотенье смеяться и плясать. Я нужен сразу всем - девчатам и ребятам. И каждую собачку готов расцеловать. Но вот упал я в лужу, Я никому не нужен.`,
    `Приложение совсем не нравится, плохое`,
    `Приложение очень нравится, хорошее`,
    `Мне сказать нечего. Было бы что сказать - сказал бы`,
    `В чёрном цилиндре, в наряде старинном, в город на праздник путник очень спешил. По горам пробирался и улыбался, но камень сорвался в пропасть с горных вершин...`,
];

const NAMES = [`Собаня `, `Котенька`, `Попуг`, `Пчелка`, `Демон Ада`];

const PERSONS = [`Тракторист, 47 лет`, `Супермодель, 22 года`, `Алкоголик, 29 лет`, `Генеральный директор, 12 лет`, `Свидетель Иеговы, 666 лет`];

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

export const generatePhoto = () => {
    return {
        id: String(new Date() + Math.random()),
        text: getRandomArrayItem(TEXT),
        name: getRandomArrayItem(NAMES),
        time: getRandomIntegerNumber(3, 600),
        likes: getRandomIntegerNumber(45, 89),
        src: getRandomIntegerNumber(1, 5)
    };
};

export const generatePhotos = (count) => {
    return new Array(count)
        .fill(``)
        .map(generatePhoto);
};
