import { createSlice } from "@reduxjs/toolkit"
import { getDetail } from "../actions"


const initialState = {
    info: null,
    isLoading: false,
    error: null,
    route: []
}

const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        clearRoute: () => {
            state.route = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDetail.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getDetail.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message
        })
        builder.addCase(getDetail.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            state.info = payload
            state.route = payload.trail
        })
    }
})

export default detailSlice.reducer
export const { clearRoute } = detailSlice.actions