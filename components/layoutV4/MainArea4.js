import { useSelector } from "react-redux"
import Loader from "./Loader"

export default function MainArea4({ children }) {
    let { userLoading, userError } = useSelector((s) => s.user)

    // WARNING: managing loading states here might cause unnecessary rerenders potential refactor impending
    // maybe i can align the loading names since i named them like an ADD idiot
    if (userLoading) return <Loader text="Checking who are you❓❓" />
    if (userError) return <ErrorRender>{userError}</ErrorRender>
    // if (loadingBots) return <Loader text="Booting up Assistant 🤖" />

    return (
        <div className="w-full px-4">
            <div className="flex flex-wrap h-full w-full pt-4">{children}</div>
        </div>
    )
}

function ErrorRender({ children }) {
    return (
        <div className="h-full w-full px-4 text-xl">
            <p>Sorry we messed up. lets us know on Discord</p>
            <div className="my-32" />

            <div className="text-red100">
                <p>The system Error we are getting is:</p>
                {children}
            </div>
        </div>
    )
}
