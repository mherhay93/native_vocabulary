import {combineReducers} from "@reduxjs/toolkit";
import userSlice from "@/redux/user/slice"


const reducer = combineReducers({
    User: userSlice,
})

export default reducer