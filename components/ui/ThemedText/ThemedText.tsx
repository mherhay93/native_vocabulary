import {StyleSheet, Text} from 'react-native';

import {useThemeColor} from '@/hooks/useThemeColor';
import {IPropsThemedText} from "@/components/ui/ThemedText/types";


export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
                           }: IPropsThemedText) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
      fontSize: 28,
      fontWeight: 'bold',
      lineHeight: 28,
      textAlign: 'center'
  },
    subtitle: {
        fontWeight: 600,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 18
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
