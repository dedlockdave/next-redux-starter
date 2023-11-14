import Image from "next/image"
import { useScreenSize } from "../../utils/effects"
import { validImageURL } from "../profileV2/util"

export default function CircleImage({ size, imageURL, className }) {
    let screenSize = useScreenSize()
    // unit sm is px
    // tailwail warning don't use dynamic value in className
    let image = validImageURL(imageURL) ? imageURL : "/images/logo.png"
    return (
        <div
            className={`justify-self-center relative rounded-full overflow-hidden ${className}`}
            style={{
                height: screenSize != "large" ? `${size / 2}px` : `${size}px`,
                width: screenSize != "large" ? `${size / 2}px` : `${size}px`,
            }}
        >
            <Image src={image} alt={imageURL} layout="fill" objectFit="cover" />
        </div>
    )
}
