import { name } from '../../manifest.json';
import tryCallback from './try_callback';

/** 
 * Inserts an item into a given array
 * @param {any[]} originalArray: The array provided
 * @param {any} insert: The item to insert
 * @param {number} insertIndex: The index to insert the item
 * @param {string?} label?: The label of the place where the item is being inserted. This is optional.
 * @returns {number}
 */
const insertItem = (originalArray: any[], insert: any, insertIndex: number, label?: string): number => {
    return tryCallback(() => {
        if (!originalArray) return undefined
    
        originalArray.length++;
        insertIndex++;

        for (let i = originalArray.length - 1; i >= insertIndex; i--) {
            originalArray[i] = originalArray[i - 1];
        }

        originalArray[insertIndex - 1] = insert;
        return originalArray.length
    }, [originalArray, insert, insertIndex], name, "insert an item at", label)
}

/** 
 * Loops through an array, runs a callback for each iteration, and pushes the result of that callback to a new array
 * @param {any[]} array: The starting array
 * @param {any} callback: The function to run
 * @param {string} label: Optional label to descibe what the function is doing
 * @returns {<array>}
 */
const mapItem = <T>(array: T[], callback: any, label?: string): any[] => {
    return tryCallback(() => {
        let newArray = []

        for(let i = 0; i < array.length; i++) {
            insertItem(newArray, callback(array[i], i, array), newArray.length)
        }

        return newArray
    }, [array, callback], name, 'map an array at', label)
};

export default {
    mapItem,
    insertItem
};
