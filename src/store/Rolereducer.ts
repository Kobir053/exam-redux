import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import rolesData from '../data/roles.json';

interface RoleStateType{
    role: string;
}

const initialState : RoleStateType = {
        role: rolesData[0],
};

export const roleSlice = createSlice({
    initialState,
    name: "role",
    reducers: {
        setRole: (state, action: PayloadAction<number>) => {
            if(action.payload > rolesData.length)
                return;
            state.role = rolesData[action.payload];
        },
    }
});

export const {setRole} = roleSlice.actions;

export default roleSlice.reducer;