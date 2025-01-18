import {FC} from 'react';
import { Image } from 'react-native';

import {IPropsImage} from './types';

const ThemedImage: FC<IPropsImage> = ({...props}) => {
    return (
        <Image {...props}/>
    )
}

export default ThemedImage;