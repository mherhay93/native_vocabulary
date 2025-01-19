import {FC} from 'react';
import {TextInput, StyleSheet} from "react-native";

import {IPropsThemedInput} from "@/components/ui/ThemedInput/types";
import {useThemeColor} from "@/hooks/useThemeColor";
import {Colors} from "@/constants/Colors";

const ThemedInput: FC<IPropsThemedInput> = ({ style, lightColor, darkColor, ...otherProps }) => {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <TextInput style={[{ backgroundColor }, style, styles.input]} {...otherProps} />;
}

export default ThemedInput;

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        backgroundColor: Colors.dark.inputBG,
        color: Colors.dark.text
    }
})