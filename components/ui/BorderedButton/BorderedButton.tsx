import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";

import {IPropsBorderedButton} from "@/components/ui/BorderedButton/types";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {Colors} from "@/constants/Colors";

const BorderedButton: FC<IPropsBorderedButton> = ({title, customStyle, ...props}) => {

    return (
        <TouchableOpacity style={[styles.buttonContainer, customStyle]} {...props} >
            <ThemedText
                darkColor={Colors.dark.borderedButtonText}
                lightColor={Colors.light.borderedButtonText}
                style={styles.text}
            >
                {title}
            </ThemedText>
        </TouchableOpacity>
    );
};

export default BorderedButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 35,
        backgroundColor: Colors.light.borderedButtonBG,
        overflow: 'hidden',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 14,
        boxShadow: '1px 4px 0px 3px rgba(0,0,0,0.75);'

    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});
