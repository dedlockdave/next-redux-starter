import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { setIsMobileNavOpen } from "../../../store/viewSlice"
import ProfileIcon from "../../user/ProfileIcon"
import { useScreenSize } from "../../../usecases/screen"
import NavMobile from "./MobileTopNav"
import { SubnavSections } from "../Subnav"
import { useRoutes } from "../../../usecases/routes"

export default function Nav() {
    let screen = useScreenSize()
    let { isMobileNavOpen } = useSelector((s) => s.view)
    let dispatch = useDispatch()
    if (screen == "small" || screen == "super-small") {
        return (
            <div className="flex justify-between items-center m-3 ">
                <NavMobile>
                    <PDFSections />
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
            <div className="text-sm px-8 h-full flex gap-8 items-center justify-between">
                <div className="flex gap-8 items-center">
                    <Link href="/">
                        <HomeBrandIcon />
                    </Link>
                    <PDFSections />
                </div>
                <div>
                    <ProfileIcon />
                </div>
            </div>
        )
    }
}

export function PDFSections() {
    // let dispatch = useDispatch()
    let { activeSection, toUpload, toDecks } = useRoutes()
    function changePage(val) {
        if (val == "Upload") {
            toUpload()
        } else if (val == "Decks") {
            toDecks()
        }
    }
    let viewItems = ["Decks", "Upload"]
    return (
        <SubnavSections
            sections={viewItems}
            selected={activeSection}
            setSection={changePage}
        />
    )
}

export function HomeBrandIcon() {
    let h = 48
    let w = 36

    let app = ""

    return (
        <div className="flex items-center">
            <Image
                alt="logo frfr"
                src={"/images/logo.png"}
                height={h}
                width={w}
            />
            <span className="font-bold text-accent1 ml-2">Flashcard Maker</span>
        </div>
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
