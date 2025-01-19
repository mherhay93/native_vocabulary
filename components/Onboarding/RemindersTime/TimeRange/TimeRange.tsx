import {FC, useRef} from 'react';
import {StyleSheet, View} from "react-native";

import InputRange from "@/components/ui/InputRange/InputRange";
import TimePicker from "@/components/ui/TimePicker/TimePicker";
import {IPropsTimeRange, timeRange} from './types';

const TimeRange: FC<IPropsTimeRange> = ({selectCount, selectTime}) => {
    const [startTime, endTime] = [useRef(new Date()), useRef(new Date())];

    const handleSelectFullTime = (value: Date, label: timeRange) => {

        if (label === timeRange.START) {
            startTime.current = value
        } else {
            endTime.current = value
        }

        const time = `${startTime.current} - ${endTime.current}`

        if (selectTime) {
            selectTime(time)
        }
    }

    return (
        <>
            <InputRange
                min={0}
                max={20}
                step={1}
                initialValue={10}
                onValueChange={selectCount}
                label='How many'
            />
            <View>
                <TimePicker
                    handleTime={(v) => handleSelectFullTime(v, timeRange.START)}
                    label='Start at'
                />
                <TimePicker
                    label='End at'
                    customStyle={styles.endTime}
                    handleTime={(v) => handleSelectFullTime(v, timeRange.END)}
                />
            </View>
        </>
    )
}

export default TimeRange;

const styles = StyleSheet.create({
    endTime: {
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8
    }
})