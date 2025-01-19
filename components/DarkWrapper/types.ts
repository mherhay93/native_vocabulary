import {ReactNode} from "react";
import {StyleProp, ViewStyle} from "react-native";

export interface IPropsOnboardingWrapper {
    children: ReactNode | ReactNode[];
    customStyle?: StyleProp<ViewStyle>;
}
