// Add your SFSymbol to MaterialIcons mappings here.
import {ComponentProps} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const MAPPING = {
    // See MaterialIcons here: https://icons.expo.fyi
    // See SF Symbols in the SF Symbols app on Mac.
    'house.fill': 'home',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
    'checkcircle': 'check-circle',
} as Partial<
    Record<
        import('expo-symbols').SymbolViewProps['name'],
        ComponentProps<typeof MaterialIcons>['name']
    >
>;

export type IconSymbolName = keyof typeof MAPPING | string;