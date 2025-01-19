import {FlatList, StyleSheet, View} from "react-native";

import {itemData} from "@/screens/Premium/ItemPremium/utils";
import {IconSymbol} from "@/components/ui/IconSymbol/IconSymbol";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";

const ItemPremium = () => {
    const renderItem = ({item}: { item: string }) => {
        return (
            <View style={styles.container}>
                <IconSymbol
                    name="checkcircle"
                    size={20}
                    weight="light"
                    color="green"
                />
                <ThemedText>{item}</ThemedText>
            </View>
        );
    };

    return <FlatList
        data={itemData}
        renderItem={renderItem}
        keyExtractor={item => item}/>;
};

export default ItemPremium;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginBottom: 2
    }
})