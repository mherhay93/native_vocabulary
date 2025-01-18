import {FC} from 'react';
import {StyleSheet, View} from "react-native";
import {useRouter} from "expo-router";
import * as Notifications from 'expo-notifications';
import {useDispatch} from "react-redux";

import TimeRange from "@/components/Onboarding/RemindersTime/TimeRange/TimeRange";
import BorderedButton from "@/components/ui/BorderedButton/BorderedButton";
import {Collapsible} from "@/components/ui/Collapsible/Collapsible";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {userReducers} from "@/redux/user/slice";
import {Colors} from "@/constants/Colors";
import {IPropsRemindersTime} from './types';

const { setUI } = userReducers

const RemindersTime: FC<IPropsRemindersTime> = ({pageData, page}) => {
    const router = useRouter();
    const dispatch = useDispatch()
    const handleNavigate = () => {
        router.push(`/onboarding/${Number(page) + 1}`)
    };

    const handleAllow = async () => {
        const {status} = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            router.push(`/onboarding/100`);
            dispatch(setUI({prevPage: page}))
        } else {
            handleNavigate()
        }
    };

    return (
        <>
            <View style={styles.titleContainer}>
                <ThemedText
                    lightColor={Colors.dark.text}
                    darkColor={Colors.dark.text}
                    type='title'
                >
                    {pageData.title}
                </ThemedText>
                <ThemedText
                    lightColor={Colors.dark.text}
                    darkColor={Colors.dark.text}
                    type='subtitle'
                >
                    {pageData.description}
                </ThemedText>
            </View>
            <Collapsible title='Voucabulary'>
                <ThemedText style={styles.textCollapse}>
                    Salibrious (adj.) - a place that is good to live in, clean and healthy.
                </ThemedText>
            </Collapsible>
            <TimeRange />
            {pageData.methodTitle && (
                <BorderedButton
                    customStyle={styles.button}
                    title={pageData.methodTitle}
                    onPress={handleAllow}
                />
            )}
        </>
    )
}

export default RemindersTime;

const styles = StyleSheet.create({
    skip: {
        marginLeft: 'auto',
        paddingTop: 8
    },
    titleContainer: {
        paddingTop: 40,
        textAlign: 'center',
        gap: 10
    },
    textCollapse: {
        color: Colors.dark.text
    },
    button: {
        marginTop: 'auto'
    }
})