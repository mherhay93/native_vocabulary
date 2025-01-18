import {ImageSourcePropType} from "react-native";
import {pageKey} from "@/redux/user/types";

export interface IOnboardingEntities {
    [key: string]: IOnboardingData;
}

export interface IOnboardingData {
    id: number;
    title: string;
    description: string;
    method: (() => void) | null;
    methodTitle: string;
    image?: ImageSourcePropType;
    skip: boolean;
    pageKay: pageKey;
    questions: string[] | 'input' | null;
}

export interface IWordData {
    [key: string]: IWordInfo[];
}

export interface IWordInfo {
    word: string,
    description: string,
    latin: string,
    phrase: string,
    id: number
}

export enum wordTypes {
    SOCIETY = 'SOCIETY',
    FOREIGN_LANG = 'FOREIGN_LANG',
    HUMAN_BODY = 'HUMAN_BODY',
    EMOTIONS = 'EMOTIONS',
    BUSINESS = 'BUSINESS',
    OTHER = 'OTHER'
}