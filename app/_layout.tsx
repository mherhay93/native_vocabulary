import {useEffect} from 'react';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import {Provider} from "react-redux";
import 'react-native-reanimated';

import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useColorScheme} from '@/hooks/useColorScheme';
import store from "@/redux/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Provider store={store}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack
              screenOptions={{
                  gestureEnabled: true,
                  headerShown: false
              }}
          >
            <Stack.Screen
                name="index"
                options={{
                    animation: "slide_from_right",
                    gestureDirection: "horizontal",
                }}
            />
              <Stack.Screen
                name="home"
                options={{
                    animation: "slide_from_right",
                    gestureDirection: "horizontal",
                }}
            />
            <Stack.Screen
                name="onboarding/[page]"
                options={{
                    animation: "slide_from_right",
                    gestureDirection: "horizontal",
            }}/>
              <Stack.Screen
                name="premium"
                options={{
                    animation: "slide_from_bottom",
                    gestureDirection: "vertical",
                }}/>
              <Stack.Screen
                  name="profile"
                  options={{
                      animation: "slide_from_bottom",
                      gestureDirection: "vertical",
            }}/>
              <Stack.Screen
                  name="categories"
                  options={{
                      animation: "slide_from_bottom",
                      gestureDirection: "vertical",
            }}/>
            <Stack.Screen name="+not-found"/>
          </Stack>
          <StatusBar style="auto"/>
        </ThemeProvider>
      </Provider>
  );
}
