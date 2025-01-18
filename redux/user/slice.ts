import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {IInitialState, IUserData} from "@/redux/user/types";

const initialState: IInitialState = {
    userData: {},
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state: Draft<IInitialState>, action: PayloadAction<IUserData>) {
            state.userData = {...state.userData, ...action.payload};
        },
    }
})


export const userReducers = {
    ...userSlice.actions
};

export default userSlice.reducer;







