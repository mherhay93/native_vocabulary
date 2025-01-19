import {FC, useState} from 'react';
import {FlatList, StyleSheet} from "react-native";

import HeaderWrapper from "@/components/HeaderWrapper/HeaderWrapper";
import ItemPremium from "@/screens/Premium/ItemPremium/ItemPremium";
import PremiumCard from "@/screens/Premium/PremiumCard/PremiumCard";
import {premiumSuggest} from "@/screens/Premium/PremiumCard/utils";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import DarkWrapper from "@/components/DarkWrapper/DarkWrapper";
import {Colors} from "@/constants/Colors";
import {IPropsPremium} from './types';

const Premium: FC<IPropsPremium> = () => {
    const [selectedID, setSelectedId] = useState('1')

    const handleSelect = (id: string) => {
        setSelectedId(id)
    }
    return (
        <DarkWrapper customStyle={styles.wrapper}>
            <HeaderWrapper title='Try Vocabulary Free'/>
            <IconSymbol
                name='workspacepremium'
                size={80}
                weight="light"
                color={Colors.light.icon}
            />
            <ThemedText type='title'>Unlock everything</ThemedText>
            <ItemPremium/>
            <FlatList
                horizontal
                data={premiumSuggest}
                renderItem={({item}) => (
                    <PremiumCard
                        title={item.title}
                        description={item.description}
                        suggestion={item.suggestions}
                        id={item.id}
                        selectedID={selectedID}
                        handleSelect={handleSelect}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.suggestion}
            />
        </DarkWrapper>
    )
}

export default Premium;

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        padding: 4
    },
    suggestion: {
        gap: 8
    }
})