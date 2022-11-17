export const createNode = (array, id, value) => {
    for (let i = 0; i < array.length; i++) {
        // обрабатывает случай когда obj с родительским id находится на первом уровне
        if (array[i].id === id) {
            // добавляет в уже существующий массив
            if (array[i].children) {
                array[i].children = [
                    ...array[i].children,
                    {id: Date.now(), text: value}];
                break;
            } else { // создает новый массив потомков
                array[i].children = [{id: Date.now(), text: value}];
                break;
            }
        }
        // обрабатывает случай когда obj не имеет родительского id, но имеет потомков
        if (array[i].children) {
            createNode(array[i].children, id, value);
        }
    }
    return array;
};