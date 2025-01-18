export interface IInitialState {
    userData: IUserData
}

export interface IUserData {
    whereHear: string,
    ageRange: string,
    gender: string,
    userName: string,
    level: string,
    timeLearning: string,
}

export enum pageKey {
    whereHear = 'whereHear',
    ageRange = 'ageRange',
    gender = 'gender',
    userName = 'userName',
    level = 'level',
    timeLearning = 'timeLearning',
    remindersTime = 'remindersTime',
    background = 'background',
    goal = 'goal',
    topic = 'topic'
}
