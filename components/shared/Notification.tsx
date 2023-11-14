import { useSelector } from "react-redux"
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useAppSelector } from "../../store/hooks"
export default function NotificationProvider() {
    // const { toastMsg } = useSelector<RootState, HelperState>(
    //     (state) => state.helper
    // )

    const { toastMsg } = useAppSelector((s) => s.view)

    useEffect(() => {
        if (!toastMsg || !toastMsg.text) {
            return
        }
        switch (toastMsg.type) {
            case "success":
                toast.success(toastMsg.text)
                break
            case "error":
                toast.error(toastMsg.text)
                break
            default:
                toast(toastMsg.text)
                break
        }
    }, [toastMsg])

    return (
        <>
            <ToastContainer autoClose={2856} theme="dark" />
        </>
    )
}
