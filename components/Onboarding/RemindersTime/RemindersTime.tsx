import {FC} from 'react';
import * as Notifications from 'expo-notifications';
import {StyleSheet, View} from "react-native";
import {useDispatch} from "react-redux";
import {useRouter} from "expo-router";

import TimeRange from "@/components/Onboarding/RemindersTime/TimeRange/TimeRange";
import {IPropsRemindersTime} from "@/components/Onboarding/RemindersTime/types";
import BorderedButton from "@/components/ui/BorderedButton/BorderedButton";
import {Collapsible} from "@/components/ui/Collapsible/Collapsible";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {userReducers} from "@/redux/user/slice";
import {pageKey} from "@/redux/user/types";
import {Colors} from "@/constants/Colors";

const {
    setUI,
    setUserData
} = userReducers

const RemindersTime: FC<IPropsRemindersTime> = ({pageData, page}) => {
    const router = useRouter();
    const dispatch = useDispatch();

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

    const handleSelectCount = (value: number) => {
        const key = pageKey.notificationCount
        dispatch(setUserData({[key] : value}));
    }

    const handleSelectTime = (value: string) => {
        const key = pageData.pageKay
        dispatch(setUserData({[key] : value}));
    }


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
            <TimeRange
                selectCount={handleSelectCount}
                selectTime={handleSelectTime}
            />
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