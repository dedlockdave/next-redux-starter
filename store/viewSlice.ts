import { createSlice } from "@reduxjs/toolkit"
import { Provider, useDispatch } from "react-redux"

export interface ViewState {
    toastMsg: ToastMessage
    isMobileNavOpen: boolean
    isLoginModalOpen: boolean
}

export interface ToastMessage {
    text: string
    type?: "success" | "error" // Add other types if needed
}

const initialState: ViewState = {
    toastMsg: { text: "" },
    isMobileNavOpen: false,
    isLoginModalOpen: false,
}

export const viewSlice = createSlice({
    name: "view",
    initialState,
    reducers: {
        setToast: (state, { payload }) => {
            state.toastMsg = payload
        },
        setIsMobileNavOpen: (state, { payload }) => {
            state.isMobileNavOpen = payload
        },
        setIsLoginModalOpen: (state, { payload }) => {
            state.isLoginModalOpen = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToast, setIsMobileNavOpen, setIsLoginModalOpen } =
    viewSlice.actions

export default viewSlice.reducer
