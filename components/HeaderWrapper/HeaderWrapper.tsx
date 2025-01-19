import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useRouter} from "expo-router";

import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {Colors} from "@/constants/Colors";
import {IPropsHeaderWrapper} from './types';

const HeaderWrapper: FC<IPropsHeaderWrapper> = ({hideCloseButton, showSearch, btnText, title}) => {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    }

    return (
        <View style={styles.container}>
            {!hideCloseButton && (
               <TouchableOpacity onPress={handleClose}>
                   <IconSymbol
                       name="close"
                       size={38}
                       weight="medium"
                       color={Colors.light.text}
                       style={styles.icon}
                   />
               </TouchableOpacity>)}
            <ThemedText
                lightColor={Colors.dark.text}
                darkColor={Colors.dark.text}
                type='title'
            >
                {title}
            </ThemedText>
            {showSearch && (
                <IconSymbol
                    name="search"
                    size={20}
                    weight="medium"
                    color={Colors.light.text}
                    style={styles.icon}
                />)}
            {Boolean(btnText) && (
                <TouchableOpacity>
                    <ThemedText style={styles.text}>{btnText}</ThemedText>
                </TouchableOpacity>)}
        </View>
    )
}

export default HeaderWrapper;

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 'auto',
        gap: 8
    },
    icon: {},
    text: {
        color: Colors.light.text
    }
})