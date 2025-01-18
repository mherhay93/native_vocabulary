import {RootState} from "@/redux/store";

export const selectUserData = (state:RootState) => state.User.userData;