/**
 * Main Miscellaneous Modules
 * @param externalPlugins: List of external plugin keys to be verified in @arg index.tsx and push down the PronounDB button if any are found.
 * @param shadow: Native shadow implementation so that it can be changed from a single place.
 * @param filterColor: Takes an input color and returns a dark or light color if the contrast of the given color reaches a threshold.
 * @param displayToast: Opens an @arg Toast which informs the user that @arg {any} something has been copied to clipboard or @arg {opens} tooltip
 */
import Miscellaneous from './misc';

/**
 * @param ArrayImplementations: Main Custom Array Manipulation Implementations class which contains a bunch of static methods defined below
 * 
 * @param insertItem: Adds an item into an array at a given index.
 * @param mapItem: Loops through an array and executes a callback for each iteration, then concatenates the result of that callback to a new array. This returns a mapped array.
 */
import ArrayImplementations from './array_methods';

/**
 * @param tryCallback: Allows a function to be nested as a callback with a function label and optional call label.
 */
import tryCallback from "./try_callback";

/**
 * @param Icons: List of icons used throughout PronounDB, all in a single Object to allow for changing easily.
 */
import Icons from "./icons";

/**
 * @param Updater: Main class to check for PronounDB Updates.
 * 
 * @param checkForUpdates: Checks for any updates that can be installed to PronounDB.
 */
import Updater from "./update";

/**
 * Finally, export all of these functions. Other components in the code will be able to access these methods by accessing @arg index.ts afterwards
 */
export {
    Miscellaneous,
    ArrayImplementations,
    tryCallback,
    Icons,
    Updater
};