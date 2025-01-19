import {StyleProp, ViewStyle} from "react-native";

export interface IPropsTimePicker {
    label?: string;
    customStyle?: StyleProp<ViewStyle>;
    handleTime: (value: Date) => void
}