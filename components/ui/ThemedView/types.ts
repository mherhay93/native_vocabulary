import type {ViewProps} from "react-native";

export interface IPropsThemedView extends ViewProps {
    lightColor?: string;
    darkColor?: string;
}