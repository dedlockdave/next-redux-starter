import CircleImage from "../layoutV4/CircleImage"

export default function RenderImage({ imageURLs, removeImage }) {
  return imageURLs == "" ? (
    <div className="flex flex-col w-full justify-center items-center bg-black1 rounded-[5px] text-white">
      <div>
        <h1 className="text-2xl mb-4">404</h1>
      </div>
      <div>this page could not be found</div>
    </div>
  ) : (
    <div className="flex flex-row">
      <CircleImage imageURL={imageURLs} size={64} className="block mx-12" />
      <span
        className="text-xs ml-4 text-high1"
        // style={{ display: "none" }}
        onClick={() => removeImage()}
      >
        Remove
      </span>
    </div>
  )
}
