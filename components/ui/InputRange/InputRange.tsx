import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Slider from '@react-native-community/slider';
import { IPropsInputRange } from "@/components/ui/InputRange/types";
import { ThemedView } from "@/components/ui/ThemedView/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText/ThemedText";
import { Colors } from "@/constants/Colors";

const RangeInput: FC<IPropsInputRange> = ({
                                              min,
                                              max,
                                              step,
                                              initialValue,
                                              onValueChange,
                                              label,
                                          }) => {
    const [value, setValue] = useState(initialValue);

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
        onValueChange(newValue);
    };

    return (
        <ThemedView style={styles.container}>
            <View style={styles.labelContainer}>
                <ThemedText
                    style={styles.label}
                    lightColor={Colors.dark.text}
                    darkColor={Colors.light.text}
                >
                    {label}
                </ThemedText>
                <ThemedText
                    style={styles.label}
                    lightColor={Colors.dark.text}
                    darkColor={Colors.light.text}
                >
                    {value}x
                </ThemedText>
            </View>
            <Slider
                style={styles.slider}
                minimumValue={min}
                maximumValue={max}
                step={step}
                value={value}
                onValueChange={handleValueChange}
                minimumTrackTintColor="#7ACEE7"
                maximumTrackTintColor="#D3D3D3"
                thumbTintColor="#FFF"
            />
            <View style={styles.labelContainer}>
                <ThemedText
                    style={styles.label}
                    lightColor={Colors.dark.text}
                    darkColor={Colors.light.text}
                >
                    {min}
                </ThemedText>
                <ThemedText
                    style={styles.label}
                    lightColor={Colors.dark.text}
                    darkColor={Colors.light.text}
                >
                    {max}
                </ThemedText>
            </View>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: Colors.dark.borderBG,
        backgroundColor: Colors.dark.inputBG,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    label: {
        fontSize: 18,
    },
    slider: {
        height: 40,
        width: '100%',
    },
});

export default RangeInput;
