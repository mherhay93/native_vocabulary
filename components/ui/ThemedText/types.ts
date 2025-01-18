import {TextProps} from "react-native";

export interface IPropsThemedText extends TextProps {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
}