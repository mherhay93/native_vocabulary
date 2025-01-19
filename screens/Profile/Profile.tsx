import React, {FC} from 'react';
import {FlatList, StyleSheet} from "react-native";
import {useSelector} from "react-redux";

import HeaderWrapper from "@/components/HeaderWrapper/HeaderWrapper";
import DarkWrapper from "@/components/DarkWrapper/DarkWrapper";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {menuSettings, menuWords} from "@/screens/Profile/utils";
import {selectUserData} from "@/redux/user/selectors";
import MenuItem from "@/components/MenuItem/MenuItem";

const Profile: FC = () => {
    const {userName} = useSelector(selectUserData)
    return (
        <DarkWrapper customStyle={styles.wrapper}>
            <HeaderWrapper title='Profile'/>
            <ThemedText>{userName}</ThemedText>
            <ThemedText style={styles.subtitle} type='subtitle'>Settings</ThemedText>
            <FlatList
                data={menuSettings}
                renderItem={(({item}) => (
                        <MenuItem name={item.title}/>
                    )
                )}
                keyExtractor={item => item.id}
            />
            <ThemedText style={styles.subtitle} type='subtitle'>Yous words</ThemedText>
            <FlatList
                data={menuWords}
                renderItem={(({item}) => (
                        <MenuItem name={item.title}/>
                    )
                )}
                keyExtractor={item => item.id}
            />
        </DarkWrapper>
    )
}

export default Profile;

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