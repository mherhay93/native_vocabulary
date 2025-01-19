import {FC} from 'react';
import {StyleSheet} from "react-native";
import {useRouter} from "expo-router";

import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import CircleButton from "@/components/ui/CircleButton/CircleButton";
import {ValidPath} from "@/types/types";
import {IPropsNavbar} from './types';

const Navbar: FC<IPropsNavbar> = ({customStyle}) => {
    const router = useRouter();

    const handleNavigation = (path: ValidPath) => {
        router.push(path)
    }

    return (
        <ThemedView style={[styles.container, customStyle]}>
            <CircleButton iconName='category'/>
            <CircleButton onPress={() => handleNavigation('/premium')} iconName='workspacepremium'/>
            <CircleButton iconName='house.fill'/>
        </ThemedView>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'transparent'
    }
})