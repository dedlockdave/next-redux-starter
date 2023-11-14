import React, { ReactNode, MouseEvent } from "react"

interface ButtonProps {
    btnType?: "disabled" | "secondary" | "warn"
    onClick?: Function
    size?: string
    style?: string
    isDisabled?: boolean
    children: ReactNode
}

export default function Button({
    btnType,
    onClick,
    size = "text-sm",
    style,
    isDisabled = false,
    children,
}: ButtonProps) {
    let styles: string
    if (isDisabled || btnType === "disabled") {
        styles = "bg-div2 text-demph2 cursor-not-allowed"
    } else if (btnType === "secondary") {
        styles = "border border-black1 bg-accent2 text-black1 cursor-pointer"
    } else if (btnType === "warn") {
        styles = "border border-black1 bg-warn1 text-black1 cursor-pointer"
    } else {
        styles =
            "bg-gradient-to-r from-blue-500 to-purple-600 text-white cursor-pointer"
    }

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (onClick) {
            onClick()
        }
    }

    return (
        <button
            className={
                `${size} font-extrabold rounded-[12px] py-2 px-6  ${styles} ` +
                style
            }
            onClick={handleButtonClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}
