import { Background } from "@react-navigation/elements";
import { TabActions } from "@react-navigation/native";
import { Linking } from "react-native";

const tiniColorLight = '#2f95dc';
const tiniColorDark = '#ff';

export default {
    light: {
        text: 'fff',
        background: '#000',
        tiniColorLight,
        tabIconDefalt: '#ccc',
        TabActionsSelected: tiniColorLight
    },
    dark: {
        text: 'fff',
        background: '#000',
        tiniColorLight,
        tabIconDefalt: '#ccc',
        TabActionsSelected: tiniColorDark
    },
    primary: '@20E1b2',
    lightGrey: ' #FCF8FF',
    grey: ' #EEE9F0',
    medium: ' #9F9AA1',
    mediumDark: ' #424242',
    green: ' #437919',
}