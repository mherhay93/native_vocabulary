import {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ImageSourcePropType, StyleSheet} from 'react-native';

import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import HomeSlider from "@/screens/Home/HomeSlider/HomeSlider";
import ThemedImage from "@/components/ui/ThemedImage/ThemedImage";
import {useGetDataStorage} from "@/hooks/useGetDataStorage";
import {selectUserData} from "@/redux/user/selectors";
import Navbar from "@/components/Navbar/Navbar";
import {pageBG, wordData} from "@/tempDB/db";
import {pageBGTypes} from "@/tempDB/types";

const Home: FC = () => {
    const {topic, background} = useSelector(selectUserData);
    const storageBackground = useGetDataStorage('background');
    const [backImg, setBgImg] = useState(background)
    const data = wordData[topic]
    const isDefault = pageBGTypes.default === backImg
    const bg = isDefault ? {backgroundColor: '#FDF5E6'} : {}

    useEffect(() => {
        setBgImg( storageBackground || background)
    }, [storageBackground]);

    return (
        <ThemedView style={{...styles.container, ...bg}}>
            {!isDefault && (
                <ThemedImage
                    source={pageBG[backImg] as ImageSourcePropType}
                    style={styles.image}
                />
            )}
            <HomeSlider slides={data}/>
            <Navbar customStyle={styles.navbar}/>
        </ThemedView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    image: {
      position: 'absolute',
      height: '100%',
    },
    navbar: {
        width: '100%',
        position: 'absolute',
        bottom: 10,
    },
})