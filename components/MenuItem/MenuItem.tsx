import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";

import {IPropsMenuItem} from "@/components/MenuItem/types";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import {Colors} from "@/constants/Colors";

const MenuItem: FC<IPropsMenuItem> = ({name}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <ThemedText>{name}</ThemedText>
            <IconSymbol
                name="chevron.right"
                size={30}
                weight="medium"
                color={Colors.dark.borderBG}
            />
        </TouchableOpacity>
    )
}

export default MenuItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "space-between",
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 6,
        borderColor: Colors.dark.borderBG
    }
})