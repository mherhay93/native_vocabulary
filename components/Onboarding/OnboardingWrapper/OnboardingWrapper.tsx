import {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Colors} from "@/constants/Colors";
import {useThemeColor} from "@/hooks/useThemeColor";
import {IPropsOnboardingWrapper} from './types';

const OnboardingWrapper: FC<IPropsOnboardingWrapper> = ({children}) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.onboardingBG,
        dark: Colors.light.onboardingBG
    }, 'background');
    return (
        <SafeAreaView style={{...styles.container, backgroundColor}}>
            <StatusBar barStyle="light-content" backgroundColor="unset" translucent/>
            {children}
        </SafeAreaView>
    )
}

export default OnboardingWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20
    }
})