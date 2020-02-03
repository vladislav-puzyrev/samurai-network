export const required = (value) => {
    if (!value) return 'Поле обязательное';
};

export const maxLengthCreator = (length) => (value) => {
    if (value.length > length) return `Максимальная длина - ${length}`;
};