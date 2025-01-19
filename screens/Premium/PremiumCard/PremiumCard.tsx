import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";

import {IPropsPremiumCard} from "@/screens/Premium/PremiumCard/types";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {Colors} from "@/constants/Colors";

const PremiumCard: FC<IPropsPremiumCard> = ({
                                                title,
                                                suggestion,
                                                description,
                                                id,
                                                selectedID,
                                                handleSelect
                                            }) => {

    return (
        <TouchableOpacity
            key={id}
            style={[styles.container, id === selectedID && styles.selected]}
            onPress={() => handleSelect(id)}
        >
            {Boolean(suggestion) && (
                <View style={styles.suggest}><ThemedText
                    style={id === selectedID && styles.selectedText}>{suggestion}</ThemedText></View>
            )}
            <View style={styles.containerText}>
                <ThemedText style={id === selectedID && styles.selectedText}>{title}</ThemedText>
                <ThemedText style={id === selectedID && styles.selectedText}>{description}</ThemedText>
            </View>
        </TouchableOpacity>
    )
}

export default PremiumCard;

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.dark.borderBG,
        borderWidth: 2,
        borderRadius: 20,
        borderStyle: 'solid',
        justifyContent: 'center',
        height: 100,
        width: 140,
        overflow: "hidden"
    },
    containerText: {
        alignItems: 'center',
    },
    selected: {
        backgroundColor: 'white',
        borderColor: Colors.light.tint,
    },
    suggest: {
        backgroundColor: Colors.light.tint,
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 10
    },
    selectedText: {
        color: Colors.dark.background
    }
})