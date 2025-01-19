import {FC} from 'react';
import {Redirect} from "expo-router";

import {useGetDataStorage} from "@/hooks/useGetDataStorage";
import Home from "@/screens/Home/Home";

const Root: FC = () => {
    const onboarded = useGetDataStorage('onboarded')

    if (onboarded === null) {
        return <Redirect href="/onboarding/1" />;
    }

    return <Home />;
}

export default Root;