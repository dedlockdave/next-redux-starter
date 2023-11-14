import "../styles/global.css"
import { AppProps } from "next/app"
/* eslint-disable no-undef */
import { useRouter } from "next/router"
import { store } from "../state/store"

import { SessionProvider } from "next-auth/react"
import "react-toastify/dist/ReactToastify.css"

import ErrorBoundary from "../components/shared/ErrorBoundary"

import Notification from "../components/shared/Notification"

import LayoutV4 from "../components/layoutV4/Layout"
import Index from "../components/layoutV4/Index"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
    let Layout = LayoutV4

    return (
        <>
            <Provider store={store}>
                <Notification />
                <SessionProvider session={pageProps.session}>
                    <ErrorBoundary>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ErrorBoundary>
                </SessionProvider>
            </Provider>
        </>
    )
}
