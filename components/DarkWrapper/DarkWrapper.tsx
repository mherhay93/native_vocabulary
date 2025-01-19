import {FC} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Colors} from "@/constants/Colors";
import {useThemeColor} from "@/hooks/useThemeColor";
import {IPropsOnboardingWrapper} from './types';

const DarkWrapper: FC<IPropsOnboardingWrapper> = ({children, customStyle}) => {
    const backgroundColor = useThemeColor({
        light: Colors.light.onboardingBG,
        dark: Colors.light.onboardingBG
    }, 'background');
    return (
        <SafeAreaView style={[{...styles.container, backgroundColor}, customStyle]}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
            {children}
        </SafeAreaView>
    )
}

export default DarkWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        gap: 20
    }
})