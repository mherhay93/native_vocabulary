import {FC, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";

import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import {Colors} from "@/constants/Colors";
import {IPropsInputButton} from './types';

const InputButton: FC<IPropsInputButton> = ({title, handelSelect, ...props}) => {
    const [select, setSelect] = useState(false)
    let timeoutId: ReturnType<typeof setTimeout>;

    const handlePress = () => {
        if (handelSelect) {
            timeoutId = setTimeout(() => {
                handelSelect(title)
            }, 400)
        }
        setSelect(!select)
    }

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId)
            setSelect(false)
        }
    }, []);

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.buttonContainer, select && styles.selected]} {...props} >
            <ThemedText
                darkColor={Colors.light.text}
                lightColor={Colors.dark.text}
                style={styles.text}
            >
                {title}
            </ThemedText>
            {select && (
                <IconSymbol
                    name="checkcircle"
                    size={20}
                    weight="medium"
                    color='green'
                />)
            }
        </TouchableOpacity>
    )
}

export default InputButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 35,
        overflow: 'hidden',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 14,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.dark.text,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selected: {
        backgroundColor: Colors.light.inputBG,
        borderColor: Colors.light.borderedButtonBG,
    },
    text: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 26
    }
});
