import React, {FC} from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    State,
} from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import {IPropsHomeSlider} from "@/components/HomeSlider/types";
import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import {Colors} from "@/constants/Colors";

const { height } = Dimensions.get('window');

const HomeSlider:FC<IPropsHomeSlider> = ({ slides }) => {

    const totalSlides = slides.length;
    const currentIndex = useSharedValue(0);
    const translateY = useSharedValue(0);

    const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
        translateY.value = -currentIndex.value * height + event.nativeEvent.translationY;
    };

    const onHandlerStateChange = (event: any) => {
        const { state, translationY } = event.nativeEvent;

        if (state === State.END || state === State.CANCELLED) {
            const nextIndex =
                translationY > 50
                    ? Math.max(currentIndex.value - 1, 0)
                    : translationY < -50
                        ? Math.min(currentIndex.value + 1, totalSlides - 1)
                        : currentIndex.value;

            currentIndex.value = nextIndex;
            translateY.value = withTiming(-nextIndex * height, { duration: 300 });
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <GestureHandlerRootView style={styles.container}>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                <Animated.View style={[styles.carousel, animatedStyle]}>
                    {slides.map((slide, index) => (
                        <View key={index} style={styles.slide}>
                            <ThemedView style={styles.slideContent}>
                                <Text style={styles.title}>{slide.word}</Text>
                                <Text style={styles.content}>{slide.latin}</Text>
                                <Text style={styles.content}>{slide.description}</Text>
                                <Text style={styles.content}>{slide.phrase}</Text>
                            </ThemedView>
                        </View>
                    ))}
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    carousel: {
        flexDirection: 'column',
        height: height * 5,
    },
    slide: {
        height,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: Colors.dark.background,
    },
    slideContent: {
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
});

export default HomeSlider;
