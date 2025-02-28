import {FC} from 'react';
import {useRouter} from "expo-router";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import * as Notifications from "expo-notifications";

import BorderedButton from "@/components/ui/BorderedButton/BorderedButton";
import {IPropsInfoPage} from "@/components/Onboarding/InfoPage/types";
import Questions from "@/components/Onboarding/Questions/Questions";
import ThemedInput from "@/components/ui/ThemedInput/ThemedInput";
import ThemedImage from "@/components/ui/ThemedImage/ThemedImage";
import {ThemedText} from "@/components/ui/ThemedText/ThemedText";
import SelectBG from "@/components/Onboarding/SelectBG/SelectBG";
import {saveDataStorage} from "@/helpers/storageHelpers";
import {selectUserUI} from "@/redux/user/selectors";
import {userReducers} from "@/redux/user/slice";
import {pageKey} from "@/redux/user/types";
import {Colors} from "@/constants/Colors";

const {
    setUserData,
    setUI
} = userReducers

const InfoPage: FC<IPropsInfoPage> = ({pageData, page,}) => {
    const dispatch = useDispatch()
    const router = useRouter();
    const {prevPage} = useSelector(selectUserUI);
    const showQuestions = pageData.questions && pageData.questions !== 'input' && pageData.pageKay !== pageKey.background;

    const handleNavigate = () => {
        if(pageData.endPage) {
            router.replace(`/premium`);
            saveDataStorage('onboarded', 'true');
            return
        }

        router.push(`/onboarding/${Number(prevPage || page) + 1}`)
        if(prevPage) {
            dispatch(setUI({prevPage: ''}))
            Notifications.requestPermissionsAsync();
        }
    };

    const handleNavigationWithoutReq = () => router.push(`/onboarding/${Number(prevPage || page) + 1}`)

    const handelSelect = (value: string) => {
        const key = pageData.pageKay
        handleNavigate();
        dispatch(setUserData({[key] : value}));
    }

    const handelChange = (value: string) => {
        const key = pageData.pageKay
        dispatch(setUserData({[key] : value}));
    }

    return (
        <>
            {!pageData.questions && (
                <ThemedImage style={styles.image} source={pageData.image}/>
            )}
            {pageData.skip && (
                <TouchableOpacity onPress={handleNavigate} style={styles.skip}>
                    <ThemedText
                        lightColor={Colors.dark.text}
                        darkColor={Colors.dark.text}
                    >
                        Skip
                    </ThemedText>
                </TouchableOpacity>
            )}
            <View style={[styles.titleContainer, !pageData.skip && styles.noSkip]}>
                <ThemedText
                    lightColor={Colors.dark.text}
                    darkColor={Colors.dark.text}
                    type='title'
                >
                    {pageData.title}
                </ThemedText>
                <ThemedText
                    lightColor={Colors.dark.text}
                    darkColor={Colors.dark.text}
                    type='subtitle'
                >
                    {pageData.description}
                </ThemedText>
            </View>
            {showQuestions && (
                <View style={styles.questions}>
                    <Questions
                        handelSelect={handelSelect}
                        data={pageData.questions as string[]}
                    />
                </View>
            )}
            {pageData.questions === 'input' && (
                <View style={styles.input}>
                    <ThemedInput
                        placeholder='Your name'
                        onChangeText={handelChange}
                        placeholderTextColor={Colors.dark.borderBG}
                    />
                </View>
            )}
            {pageData.pageKay === pageKey.background && (
                    <SelectBG
                        handelChange={handelChange}
                    />
            )}
            {pageData.methodTitle && (
                <BorderedButton
                    customStyle={styles.button}
                    title={pageData.methodTitle}
                    onPress={handleNavigate}
                />
            )}
            {pageData.pageKay === pageKey.notification && (
                <TouchableOpacity
                    style={styles.textButton}
                    onPress={handleNavigationWithoutReq}
                >
                    <ThemedText>I'm not ready yet</ThemedText>
                </TouchableOpacity>
            )}
        </>
    )
}

export default InfoPage;

const styles = StyleSheet.create({
    skip: {
        marginLeft: 'auto',
        paddingTop: 8
    },
    noSkip: {
        marginTop: 40
    },
    image: {
        height: '40%',
        aspectRatio: 2/2
    },
    titleContainer: {
        paddingTop: 0,
        textAlign: 'center',
        gap: 10
    },
    questions: {
        flex: 1,
        width: '100%',
    },
    input: {
        width: '100%',
    },
    button: {
        marginTop: 'auto'
    },
    textButton: {

    }
})