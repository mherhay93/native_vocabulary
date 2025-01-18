import {FC} from 'react';
import {FlatList, StyleSheet, View} from "react-native";

import InputButton from "@/components/ui/InputButton/InputButton";
import {IPropsQuestions} from './types';

const Questions: FC<IPropsQuestions> = ({data, handelSelect}) => {

    return (
        <FlatList
            data={data}
            renderItem={({item}) => (
                <View style={styles.item}>
                    <InputButton title={item} handelSelect={handelSelect}/>
                </View>
            )}
            keyExtractor={item => item}
        />
    )
}

export default Questions;

const styles = StyleSheet.create({
    item: {
        paddingTop: 6,
        paddingBottom: 6,
    }
})