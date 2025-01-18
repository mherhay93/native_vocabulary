import {TextInputProps} from "react-native";

export interface IPropsThemedInput extends TextInputProps {
    lightColor?: string;
    darkColor?: string;
}