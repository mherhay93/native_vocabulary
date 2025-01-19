import {FC} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";

import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import {Colors} from "@/constants/Colors";
import {IPropsCircleButton} from './types';

const CircleButton: FC<IPropsCircleButton> = ({iconName = '', ...props}) => {
    return (
        <TouchableOpacity style={styles.container} {...props}>
            <IconSymbol
                name={iconName}
                size={40}
                weight="light"
                color={Colors.light.borderedButtonText}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

export default CircleButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px 1px rgba(0,0,0,0.3)',
        height: 50,
        width: 50
    },
    icon: {
        margin: 'auto',
        padding: 0,
    }
})