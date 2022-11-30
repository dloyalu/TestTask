/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[] {
    let j: number;
    let RandomArray: string[] = [];
    for(let i:number = array.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    for (let k:number = (array.length >= numOfItems ? numOfItems : array.length); k > 0; k--) 
        RandomArray[k-1]= array[k-1];
    return RandomArray;
}
export default getRandomElements;