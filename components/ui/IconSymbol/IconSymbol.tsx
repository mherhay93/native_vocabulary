// This file is a fallback for using MaterialIcons on Android and web.

import { SymbolWeight } from 'expo-symbols';
import {OpaqueColorValue, StyleProp, TextStyle} from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {IconSymbolName, MAPPING} from "@/components/ui/IconSymbol/types";

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name as keyof typeof MAPPING]} style={style} />;
}
