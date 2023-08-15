export const deleteNode = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        // обрабатывает случай когда obj с удаляемым id находится на верхнем уровне
        if (array[i].id === id) {
            array.splice(i, 1);
            return array;
        }
        // обрабатывает случай когда obj не имеет удаляемого id, но имеет потомков, у которых он может быть
        if (array[i].children) {
            deleteNode(array[i].children, id);
        }
    }
    return array;
};