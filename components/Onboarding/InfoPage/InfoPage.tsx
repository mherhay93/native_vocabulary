import {FC} from 'react';
import {useRouter} from "expo-router";
import {StyleSheet, TouchableOpacity, View} from "react-native";

import BorderedButton from "@/components/ui/BorderedButton/BorderedButton";
import Questions from "@/components/Onboarding/Questions/Questions";
import ThemedInput from "@/components/ui/ThemedInput/ThemedInput";
import ThemedImage from "@/components/ui/ThemedImage/ThemedImage";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {Colors} from "@/constants/Colors";
import {IPropsInfoPage} from './types';

const InfoPage: FC<IPropsInfoPage> = ({pageData, page,}) => {
    const router = useRouter();
    const handleNavigate = () => router.push(`/onboarding/${Number(page) + 1}`)

    return (
        <>
            {!pageData.questions && (
                <ThemedImage style={styles.image} source={pageData.image}/>
            )}
            {pageData.skip && (
                <TouchableOpacity onPress={handleNavigate} style={styles.skip}>
                    <ThemedText
                        lightColor={Colors.dark.text}
                        darkColor={Colors.dark.text}
                    >
                        Skip
                    </ThemedText>
                </TouchableOpacity>
            )}
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
            {pageData.questions && pageData.questions !== 'input' && (
                <View style={styles.questions}>
                    <Questions
                        handleNavigate={handleNavigate}
                        data={pageData.questions}
                    />
                </View>
            )}
            {pageData.questions === 'input' && (
                <View style={styles.input}>
                    <ThemedInput/>
                </View>
            )}
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

export default InfoPage;

const styles = StyleSheet.create({
    skip: {
        marginLeft: 'auto',
        paddingTop: 8
    },

    image: {
        height: '40%'
    },
    titleContainer: {
        paddingTop: 0,
        textAlign: 'center',
        gap: 10
    },
    questions: {
        width: '100%',
        height: '74%'
    },
    input: {
        width: '100%',
    },
    button: {
        marginTop: 'auto'
    }
})