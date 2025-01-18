import {ButtonProps, StyleProp, ViewStyle} from "react-native";

export interface IPropsBorderedButton extends ButtonProps {
    customStyle?: StyleProp<ViewStyle>;
}