import {FC, useState} from 'react';

import {
    ImageBackground,
    ImageBackgroundProps,
    StyleSheet,
    View,
    TouchableOpacity
} from "react-native";

import { pageBG } from "@/tempDB/db";
import {pageBGTypes} from "@/tempDB/types";
import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import { IPropsSelectBG } from './types';

const SelectBG: FC<IPropsSelectBG> = ({handelChange}) => {
    const [select, setSelect] = useState<string>(pageBGTypes.default)
    const data = Object.keys(pageBG);

    const handleSelect = (item: string) => {
        setSelect(item)

        if (handelChange) {
            handelChange(item)
        }
    }

    const renderItem = (item: string) => {
        const imageUri = pageBG[item];

        if (imageUri === pageBGTypes.default) {
            return (
                <TouchableOpacity onPress={() => handleSelect(item)} style={[styles.background, styles.default]}>
                    {select === item && (
                        <IconSymbol
                            name="checkcircle"
                            size={20}
                            weight="medium"
                            color='green'
                            style={styles.select}
                        />)
                    }
                </TouchableOpacity>
            )
        }

        return (
         <TouchableOpacity onPress={() => handleSelect(item)}>
             <ImageBackground
                 source={imageUri as ImageBackgroundProps}
                 style={styles.background}
             >
                 {select === item && (
                     <IconSymbol
                         name="checkcircle"
                         size={20}
                         weight="medium"
                         color='green'
                         style={styles.select}
                     />)
                 }
             </ImageBackground>
         </TouchableOpacity>
        );
    };

    return (
        <View
            style={styles.container}
        >
            {data.map(item => (
                <View key={item}>
                    {renderItem(item)}
                </View>
            ))}
        </View>
    );
};

export default SelectBG;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 6
    },
    background: {
        width: 80,
        height: 120,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
    },

    select: {
        position: 'absolute',
        top: 10,
        right: 10
    },

    default: {
        backgroundColor: '#FDF5E6'
    }
});
