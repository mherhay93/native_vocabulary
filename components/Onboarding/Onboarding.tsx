import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {useLocalSearchParams} from "expo-router";

import OnboardingWrapper from "@/components/Onboarding/OnboardingWrapper/OnboardingWrapper";
import BorderedButton from "@/components/ui/BorderedButton/BorderedButton";
import ThemedImage from "@/components/ui/ThemedImage/ThemedImage";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {onboardingData} from "@/tempDB/db";
import {Colors} from "@/constants/Colors";
import {IPropsOnboarding} from './types';

const Onboarding: FC<IPropsOnboarding> = () => {
    const {page} = useLocalSearchParams()
    const key = page && typeof page === 'string' ? page : ''

    const pageData = onboardingData[key]
    if (!pageData) {
        return null
    }

    return (
        <OnboardingWrapper>
            <ThemedImage style={styles.image} source={pageData.image}/>
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
            <BorderedButton
                title={pageData.methodTitle}
            />
        </OnboardingWrapper>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        paddingTop: 10,
        textAlign: 'center',
        gap: 10
    },
})