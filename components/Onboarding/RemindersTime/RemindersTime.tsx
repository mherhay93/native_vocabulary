import {FC} from 'react';
import {StyleSheet, View} from "react-native";
import {useRouter} from "expo-router";

import TimeRange from "@/components/Onboarding/RemindersTime/TimeRange/TimeRange";
import BorderedButton from "@/components/ui/BorderedButton/BorderedButton";
import {Collapsible} from "@/components/ui/Collapsible/Collapsible";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {Colors} from "@/constants/Colors";
import {IPropsRemindersTime} from './types';

const RemindersTime: FC<IPropsRemindersTime> = ({pageData, page}) => {
    const router = useRouter();
    const handleNavigate = () => router.push(`/onboarding/${Number(page) + 1}`);

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
                    onPress={handleNavigate}
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