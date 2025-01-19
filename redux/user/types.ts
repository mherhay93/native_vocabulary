export interface IInitialState {
    userData: IUserData;
    UI: IUI
}

export interface IUserData {
    whereHear: string,
    ageRange: string,
    gender: string,
    userName: string,
    level: string,
    timeLearning: string,
    background: string,
    goal: string,
    topic: string,
    notificationCount: number,
    remindersTime: string,
}

export interface IUI {
    prevPage: string | number
}

export enum pageKey {
    whereHear = 'whereHear',
    ageRange = 'ageRange',
    gender = 'gender',
    userName = 'userName',
    level = 'level',
    timeLearning = 'timeLearning',
    remindersTime = 'remindersTime',
    notificationCount = 'notificationCount',
    background = 'background',
    goal = 'goal',
    topic = 'topic',
    notification ='notification',
}
