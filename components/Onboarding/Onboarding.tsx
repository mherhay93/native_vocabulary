import {FC} from 'react';
import {Redirect, useLocalSearchParams} from "expo-router";

import OnboardingWrapper from "@/components/Onboarding/OnboardingWrapper/OnboardingWrapper";
import InfoPage from "@/components/Onboarding/InfoPage/InfoPage";
import RemindersTime from "@/components/Onboarding/RemindersTime/RemindersTime";
import {onboardingData} from "@/tempDB/db";
import {pageKey} from "@/redux/user/types";
import {IPropsOnboarding} from './types';

const Onboarding: FC<IPropsOnboarding> = () => {
    const {page} = useLocalSearchParams();
    const pageNumber = page && typeof page === 'string' ? page : ''

    const pageData = onboardingData[pageNumber]

    if (!pageData || !pageKey) {
        return <Redirect href='/+not-found' />
    }

    const renderPage = () => {
        switch (pageData.pageKay) {
            case pageKey.remindersTime: {
                return <RemindersTime page={pageNumber} pageData={pageData}/>
            }
            default:
                return <InfoPage pageData={pageData} page={pageNumber}/>

        }
    }

    return (
        <OnboardingWrapper>
            {renderPage()}
        </OnboardingWrapper>
    )
}

export default Onboarding;