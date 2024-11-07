import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FloorStateType{
    floorAccess: boolean[];
}

const initialState : FloorStateType = {
        floorAccess: [false, false, false, false, false],
};

export const floorSlice = createSlice({
    initialState,
    name: "floorAccess",
    reducers: {
        changeAccess: (state, action: PayloadAction<number>) => {
            state.floorAccess[action.payload] = !state.floorAccess[action.payload];
        },
    }
});

export const {changeAccess} = floorSlice.actions;

export default floorSlice.reducer;