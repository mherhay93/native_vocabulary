/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#ffffff',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    onboardingBG: '#2B2D30',
    borderedButtonBG: '#7cb1dd',
    borderedButtonText: '#000',
    inputBG: 'rgba(136, 136, 136, 0.22)',
    borderBG: 'rgb(103,103,103)'
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#fbfbfb',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    onboardingBG: '#2B2D30',
    borderedButtonBG: '#7cb1dd',
    borderedButtonText: '#000',
    inputBG: 'rgba(136, 136, 136, 0.22)',
    borderBG: 'rgb(103,103,103)'
  },
};
