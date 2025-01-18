import {FC} from 'react';
import {View, StyleSheet} from "react-native";

import InputRange from "@/components/ui/InputRange/InputRange";
import TimePicker from "@/components/ui/TimePicker/TimePicker";
import {IPropsTimeRange} from './types';

const TimeRange: FC<IPropsTimeRange> = () => {
    return (
        <>
            <InputRange
                min={0}
                max={20}
                step={1}
                initialValue={10}
                onValueChange={() => {}}
                label='How many'
            />
            <View>
                <TimePicker label='Start at' />
                <TimePicker label='End at' customStyle={styles.endTime}/>
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