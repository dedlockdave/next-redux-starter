import Image from "next/image"

export function Footer() {
    return (
        <div className="relative bottom-0 border-t border-div1 bg-black1 w-screen md:pr-8">
            <div className="flex flex-row-reverse space-x-4">
                <SocialCircle
                    profileURL={"https://twitter.com/dedlockdave"}
                    src={"/images/icon_twitter.svg"}
                />
                <SocialCircle
                    profileURL={"https://discord.gg/v9GJgspQDQ"}
                    src={"/images/icon_discord.svg"}
                />
            </div>
        </div>
    )
}

function SocialCircle({ src, profileURL }) {
    return (
        <a className="cursor-pointer mx-4" href={profileURL}>
            <div className="flex">
                <div className="h-8 w-8 my-2 rounded-full flex items-center justify-center">
                    <Image alt={src} src={src} height={20} width={20} />
                </div>
            </div>
        </a>
    )
}
