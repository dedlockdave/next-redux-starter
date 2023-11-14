import { signOut, useSession } from "next-auth/react"
import { callbackURLSignOut } from "../utils/consts"
import { useAppSelector } from "../store/hooks"

export function useUserInfo() {
    let { user } = useAppSelector((s) => s.user)
    const { data: session } = useSession()
    if (!user || !session) return {}

    return {
        userName: session?.user?.name,
        picture: user?.picture,
        // loginType: session?.providerType,
    }
}

export function useLogout() {
    let logout = () => {
        signOut({ callbackUrl: callbackURLSignOut() })
    }

    return { logout }
}
