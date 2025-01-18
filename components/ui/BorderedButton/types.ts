import {CSSProperties} from "react";
import {ButtonProps} from "react-native";

export interface IPropsBorderedButton extends ButtonProps {
    customStyle?: CSSProperties;
}