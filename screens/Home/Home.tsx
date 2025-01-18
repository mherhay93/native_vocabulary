import {FC} from 'react';

import {ThemedView} from "@/components/ui/ThemedView/ThemedView";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import {IPropsHome} from './types';

const Home: FC<IPropsHome> = () => {
    return (
        <ThemedView>
           <ThemedText>
               Home
           </ThemedText>
        </ThemedView>
    )
}

export default Home;