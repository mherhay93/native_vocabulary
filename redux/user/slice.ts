import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {IInitialState, IUI, IUserData} from "@/redux/user/types";
import {pageBGTypes} from "@/tempDB/types";

const initialState: IInitialState = {
    userData: {
        whereHear: '',
        ageRange: '',
        gender: '',
        userName: '',
        level: '',
        timeLearning: '',
        background: pageBGTypes.default,
        goal: '',
        topic: '',
        notificationCount: 10,
        remindersTime: '',
    },
    UI: {
        prevPage: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state: Draft<IInitialState>, action: PayloadAction<Partial<IUserData>>) {
            state.userData = {...state.userData, ...action.payload};
        },
        setUI(state: Draft<IInitialState>, action: PayloadAction<Partial<IUI>>) {
            state.UI = {...state.UI, ...action.payload};
        },
    }
})


export const userReducers = {
    ...userSlice.actions
};

export default userSlice.reducer;







