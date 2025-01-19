import {FC} from 'react';
import { Image } from 'react-native';

import {IPropsImage} from "@/components/ui/ThemedImage/types";


const ThemedImage: FC<IPropsImage> = ({...props}) => {
    return (
        <Image {...props}/>
    )
}

export default ThemedImage;