import React from "react"
import ProfilePicSettings from "../profileV2/ProfilePicSettings"
import { useUserInfo } from "../../usecases/userUse"
import { useLoginModal } from "../../usecases/view"

const Login = () => {
    let { userName, userImage } = useUserInfo()
    if (!userName) return null
    return (
        <div className="">
            <div className="flex flex-row items-center space-x-1 justify-center cursor-pointer">
                <span className="text-xs">{userName}</span>
                <ProfilePicSettings profileImage={userImage} />
            </div>
        </div>
    )
}

export default Login
