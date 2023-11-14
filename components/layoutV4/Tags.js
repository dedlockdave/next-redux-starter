import Head from "next/head"
import { useRouter } from "next/router"

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })
`

function getTags(route) {
    let tags = {}
    tags.title = "AI Apps for Humans"
    tags.description = "Artificial Intelligence; Real Value"

    tags.image = "https://automod.plum.club/images/home1.png"
    return tags
}

export default function _Tags({ title, description, image }) {
    let router = useRouter()
    let defaultTags = getTags(router.asPath)
    return (
        <>
            <Head>
                <title>{title || defaultTags.title}</title>
                <link rel="shortcout icon" href="/images/favicon.ico" />
                <meta
                    property="og:title"
                    key="title"
                    content={title || defaultTags.title}
                ></meta>
                <meta
                    property="og:description"
                    key="description"
                    content={description || defaultTags.description}
                ></meta>
                <meta
                    property="og:image"
                    key="image"
                    content={appendDomain(image || defaultTags.image)}
                ></meta>
                <meta property="og:type" key="type" content="website"></meta>
                <meta
                    property="og:url"
                    key="url"
                    content={`https://plum.club${router.asPath}`}
                ></meta>
                {/* <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.36/dist/web3.min.js" integrity="sha256-nWBTbvxhJgjslRyuAKJHK+XcZPlCnmIAAMixz6EefVk=" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/@toruslabs/torus-embed"/> */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: noOverlayWorkaroundScript,
                    }}
                />
            </Head>
        </>
    )
}

const appendDomain = (image) => {
    if (!image) return
    if (image[0] == "/") {
        let h =
            typeof window !== "undefined" &&
            window.location.hostname &&
            window.location.hostname
        return h + image
    }
    return image
}

// <!-- Primary Meta Tags -->
// <title>Meta Tags — Preview, Edit and Generate</title>
// <meta name="title" content="Meta Tags — Preview, Edit and Generate">
// <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://metatags.io/">
// <meta property="og:title" content="Meta Tags — Preview, Edit and Generate">
// <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
// <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image">
// <meta property="twitter:url" content="https://metatags.io/">
// <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
// <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
// <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
