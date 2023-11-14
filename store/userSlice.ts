import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
    user: any
    userLoading: boolean
    userError: string
}

const initialState: UserState = {
    user: null,
    userLoading: false,
    userError: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Run after user connects login with Metamask
        setUser: (state, { payload }) => {
            // logd(`running setUser with payload ${JSON.stringify(payload)}`)
            if (!payload) {
                return
            }
            state.user = payload
        },
        setUserLoading: (state, { payload }) => {
            state.userLoading = payload.loading
            state.userError = payload.error
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, setUserLoading } = userSlice.actions

export default userSlice.reducer
