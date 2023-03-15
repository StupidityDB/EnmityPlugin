import { Toasts } from "enmity/metro/common";
import Icons from "./icons";

/**
 * @param shadow: Native shadow implementation that is used throughout the entire plugin.
 * This is a function which can take in a number for the opacity, but this @param is optional.
 */
type DefaultObject = { [key: string]: string | number | DefaultObject }
const shadow = (opacity: number = 0.10): DefaultObject => ({
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 4,
    },
    shadowOpacity: opacity,
    shadowRadius: 4.65,
    elevation: 8
});

/**
 * Open a toast with the text provided saying it has been copied to clipboard or as a tooltip
 * @param {string} source: The text provided to send inside of the toast
 * @param {'clipboard | 'tooltip'} type: The type of toast to show.
 *
 * @uses @param {number} Icons.Clipboard
 * @returns {void}
 */
const displayToast = (source: string, type: 'clipboard' | 'tooltip'): void => {
    Toasts.open({
        content: type=='clipboard' ? `Copied ${source} to clipboard.` : source,
        source: type=='clipboard' ? Icons.Clipboard : Icons.Self
    });
};

export default
{
    shadow,
    displayToast
};
