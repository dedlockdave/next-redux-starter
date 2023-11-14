import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { setIsMobileNavOpen } from "../../../state/viewSlice"
import ProfileIcon from "../../login/ProfileIcon"
import { useScreenSize } from "../../../usecases/screen"
import NavMobile from "./MobileTopNav"

export default function Nav() {
    let screen = useScreenSize()
    let { isMobileNavOpen } = useSelector((s) => s.view)
    let dispatch = useDispatch()
    if (screen == "small" || screen == "super-small") {
        return (
            <div className="flex justify-between items-center m-3">
                <NavMobile>
                    <p>we put something here later</p>
                </NavMobile>
                <div className="flex justify-end space-x-3">
                    <div
                        onClick={() =>
                            isMobileNavOpen &&
                            dispatch(setIsMobileNavOpen(false))
                        }
                    >
                        <ProfileIcon />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center">
                <Link href="/">
                    <div className="pl-8 h-full flex items-center space-x-3 cursor-pointer">
                        <HomeBrandIcon />
                    </div>
                </Link>

                <div />

                <div className="pr-8 flex justify-end">
                    <ProfileIcon />
                </div>
            </div>
        )
    }
}

export function HomeBrandIcon() {
    let h = 48
    let w = 36

    let app = ""

    return (
        <>
            <Image src={"/images/logo.png"} height={h} width={w} />
            <span className="text-sm font-bold text-accent1 ml-2">My App</span>
        </>
    )
}

export function HomeBrandMobile() {
    let h = 40
    let w = 40
    return (
        <>
            <Image src={"/images/plummy.svg"} height={h} width={w} />
        </>
    )
}
