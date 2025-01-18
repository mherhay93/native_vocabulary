import {FC} from 'react';
import {TextInput, StyleSheet} from "react-native";

import {useThemeColor} from "@/hooks/useThemeColor";
import {Colors} from "@/constants/Colors";
import {IPropsThemedInput} from './types';

const ThemedInput: FC<IPropsThemedInput> = ({ style, lightColor, darkColor, ...otherProps }) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <TextInput style={[{ backgroundColor }, style, styles.input]} {...otherProps} />;
}

export default ThemedInput;

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        backgroundColor: 'rgba(136, 136, 136, 0.22)',
        color: Colors.dark.text
    }
})