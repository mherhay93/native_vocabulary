import {FC} from 'react';
import {Redirect, useLocalSearchParams} from "expo-router";
import {useSelector} from "react-redux";

import DarkWrapper from "@/components/DarkWrapper/DarkWrapper";
import RemindersTime from "@/components/Onboarding/RemindersTime/RemindersTime";
import InfoPage from "@/components/Onboarding/InfoPage/InfoPage";
import {selectUserData} from "@/redux/user/selectors";
import {onboardingData} from "@/tempDB/db";
import {pageKey} from "@/redux/user/types";
import {IPropsOnboarding} from './types';

const Onboarding: FC<IPropsOnboarding> = () => {
    const {page} = useLocalSearchParams();
    const pageNumber = page && typeof page === 'string' ? page : ''
    const user = useSelector(selectUserData)
    const pageData = onboardingData[pageNumber]
    console.log('user ========', user)
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
        <DarkWrapper>
            {renderPage()}
        </DarkWrapper>
    )
}

export default Onboarding;