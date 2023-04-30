import { Toasts } from "enmity/metro/common";
import Icons from "./icons";

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
