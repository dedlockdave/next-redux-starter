import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import viewSlice from "./viewSlice"
import userSlice from "./userSlice"
// import { plumApi } from "../services/rtk"

export const store = configureStore({
    reducer: {
        view: viewSlice,
        user: userSlice,
        // Add the generated reducer as a specific top-level slice
        // Below is RTK but i think di sshit dumb af
        // [plumApi.reducerPath]: plumApi.reducer,
    },

    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: { warnAfter: 128 },
            serializableCheck: { warnAfter: 128 },
        }),
    // .concat(plumApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
