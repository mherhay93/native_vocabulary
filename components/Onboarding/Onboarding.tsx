import {FC} from 'react';
import {Redirect, useLocalSearchParams} from "expo-router";

import OnboardingWrapper from "@/components/Onboarding/OnboardingWrapper/OnboardingWrapper";
import {onboardingData} from "@/tempDB/db";
import InfoPage from "@/components/Onboarding/InfoPage/InfoPage";
import {IPropsOnboarding} from './types';

const Onboarding: FC<IPropsOnboarding> = () => {
    const {page} = useLocalSearchParams();
    const pageKey = page && typeof page === 'string' ? page : ''

    const pageData = onboardingData[pageKey]

    if (!pageData || !pageKey) {
        return <Redirect href='/+not-found' />
    }

    return (
        <OnboardingWrapper>
            <InfoPage pageData={pageData} page={pageKey}/>
        </OnboardingWrapper>
    )
}

export default Onboarding;