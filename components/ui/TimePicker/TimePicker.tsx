import {FC, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {IPropsTimePicker} from "@/components/ui/TimePicker/types";
import {generateTime} from "@/components/ui/TimePicker/utils";
import {Colors} from "@/constants/Colors";

const TimePicker:FC<IPropsTimePicker> = ({label, customStyle, handleTime }) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (_: unknown, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        handleTime(currentDate)
    };

    const showTimePicker = () => {
        setShow(true);
    };

    return (
        <ThemedView style={[styles.container, customStyle]}>
            <ThemedText
                lightColor={Colors.dark.text}
                darkColor={Colors.light.text}
            >
                {label}
            </ThemedText>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="time"
                    display="spinner"
                    onChange={onChange}
                />
            )}
            <TouchableOpacity onPress={showTimePicker}>
                <ThemedText
                    lightColor={Colors.dark.text}
                    darkColor={Colors.light.text}
                    style={styles.time}
                >
                    {generateTime(date)}
                </ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
};

export default TimePicker;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderStyle: 'solid',
        borderColor: Colors.dark.borderBG,
        backgroundColor: Colors.dark.inputBG,
        borderWidth: 1,
        padding: 6
    },
    time: {
        backgroundColor: Colors.dark.inputBG,
        padding: 4,
        borderRadius: 4
    }
})
