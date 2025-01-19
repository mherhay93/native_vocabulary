import {FC} from 'react';
import {StyleSheet} from 'react-native';

import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import {IPropsHome} from './types';
import Navbar from "@/components/Navbar/Navbar";

const Home: FC<IPropsHome> = () => {
    return (
        <ThemedView style={styles.container}>
            <Navbar customStyle={styles.navbar}/>
        </ThemedView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    navbar: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
    },
})