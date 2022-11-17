export const deleteNode = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        // обрабатывает случай когда obj с удаляемым id находится на верхнем уровне
        if (array[i].id === id) {
            array.splice(i, 1);
            break;
        }
        // обрабатывает случай когда obj не имеет удаляемого id, но имеет потомков, у которых он может быть
        if (array[i].children) {
            deleteNode(array[i].children, id);
        }
    }
    return array;
};

// let hasDeleted = false
//
// export const deleteNode = (array, queue, counter) => {
//     for (let i = counter; i < queue.length; i++){
//         if (hasDeleted){
//             break;
//         }
//         // если текущий элемент в очереди последний
//         if (i === queue.length - 1){
//             array.splice(queue[counter], 1);
//             hasDeleted = true
//             break;
//         }else{ // если есть еще элементы
//             deleteNode(array[queue[counter]].children, queue, counter + 1)
//         }
//     }
//     return array
// }