// import Image from "next/image"
import { useScreenSize } from "../../usecases/screen"
import ImageUploading from "react-images-uploading"
import { saveImage } from "../../services/imageService"
import Image from "next/image"

export function PictureInput({ onPicSet, url, size = 32 }) {
    let screenSize = useScreenSize()

    const handleUpload = async (images) => {
        try {
            let firstImage = images[0]
            const body = new FormData()
            body.append("image", firstImage.file)
            let url = await saveImage(body)
            onPicSet(url)
        } catch (error) {
            console.error("could not save image :", error)
        }
    }

    return (
        <ImageUploading
            value={url}
            multiple={false}
            dataURLKey="data_url"
            onChange={handleUpload}
            maxNumber={1}
        >
            {({ onImageUpload }) => {
                console.log("onIMage", onImageUpload)
                return (
                    <div
                        className={`relative align-self-center rounded-full overflow-hidden cursor-pointer`}
                        onClick={onImageUpload}
                        style={{
                            height:
                                screenSize != "large"
                                    ? `${size / 2}px`
                                    : `${size}px`,
                            width:
                                screenSize != "large"
                                    ? `${size / 2}px`
                                    : `${size}px`,
                        }}
                    >
                        <Image
                            src={url || "/images/logo.png"}
                            alt={url}
                            layout="fill"
                            objectFit="cover"
                        />
                        <p
                            className="text-xs text-neutral absolute top-0 left-0 w-full h-full flex justify-center items-center text-white"
                            style={{ background: "rgba(0, 0, 0, 0.5)" }}
                        >
                            Change
                        </p>
                    </div>
                )
            }}
        </ImageUploading>
    )
}
