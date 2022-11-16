export const editNode = (array, id, value) => {
    for (let i = 0; i < array.length; i++) {
        // обрабатывает случай когда obj с родительским id находится на первом уровне
        if (array[i].id === id) {
            array[i].text = value
            break;
        }
        // обрабатывает случай когда obj не имеет родительского id, но имеет потомков
        if (array[i].children !== undefined) {
            editNode(array[i].children, id, value);
        }
    }
    return array;
};