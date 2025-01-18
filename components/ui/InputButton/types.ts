import {ButtonProps} from "react-native";

export interface IPropsInputButton extends ButtonProps {
    handelSelect: (value: string) => void;
}