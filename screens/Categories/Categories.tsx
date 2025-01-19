import React, {FC} from 'react';
import {FlatList, StyleSheet} from "react-native";

import DarkWrapper from "@/components/DarkWrapper/DarkWrapper";
import HeaderWrapper from "@/components/HeaderWrapper/HeaderWrapper";
import MenuItem from "@/components/MenuItem/MenuItem";
import {categories} from "@/screens/Categories/utils";

const Categories: FC = () => {
    return (
        <DarkWrapper customStyle={styles.wrapper}>
            <HeaderWrapper title='Categories'/>
            <FlatList
                data={categories}
                renderItem={(({item}) => (
                        <MenuItem name={item.title}/>
                    )
                )}
                keyExtractor={item => item.id}
            />
        </DarkWrapper>
    )
}

export default Categories;

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        padding: 10,
        gap: 0
    },

    subtitle: {
        marginTop: 20,
        marginRight: 'auto',
        marginBottom: 20
    }
})