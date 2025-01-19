import {FC} from 'react';
import {StyleSheet} from "react-native";
import {useRouter} from "expo-router";

import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import CircleButton from "@/components/ui/CircleButton/CircleButton";
import {IPropsNavbar} from "@/components/Navbar/types";
import {ValidPath} from "@/types/types";

const Navbar: FC<IPropsNavbar> = ({customStyle}) => {
    const router = useRouter();

    const handleNavigation = (path: ValidPath) => {
        router.push(path)
    }

    return (
        <ThemedView style={[styles.container, customStyle]}>
            <CircleButton onPress={() => handleNavigation('/categories')} iconName='category'/>
            <CircleButton onPress={() => handleNavigation('/premium')} iconName='workspacepremium'/>
            <CircleButton onPress={() => handleNavigation('/profile')} iconName='house.fill'/>
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