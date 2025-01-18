import { View } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import {IPropsThemedView} from "@/components/ui/ThemedView/types";

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: IPropsThemedView) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
