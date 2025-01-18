import {FC} from 'react';
import {Redirect} from "expo-router";

import {getDataStorage} from "@/helpers/storageHelpers";
import Home from "@/screens/Home/Home";
import {IPropsRoot} from './types';

const Root: FC<IPropsRoot> = () => {
    const onboarded = getDataStorage('onboarded')

    if (Boolean(onboarded)) {
        return <Redirect href="/onboarding/1" />;
    }

    return <Home />;
}

export default Root;