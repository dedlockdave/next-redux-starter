import { useRouter } from "next/router"

export function useSectionRoutes() {
    let router = useRouter()
    // let { projectID } = useSelectedProjectInfo()
    let routeProjectID = router.query.projectID
    if (typeof window === "undefined") return {}

    // let useProjectID = projectID || routeProjectID

    // if (!useProjectID) {
    //   return {
    //     toAssistantsList: () => {},
    //     toChat: () => {},
    //     toAnalytics: () => {},
    //   }
    // }
    let url = new URL(router.asPath, `http://${window.location.host}`)
    let pathSegments = url.pathname.split("/").filter((segment) => segment)
    let activeSection
    if (pathSegments.length < 1) {
        // console.error("dunnow how to handle pathSegments", pathSegments)
    } else {
        activeSection = pathSegments[1]
    }

    return {
        activeSection,
        toHome: () => router.push(`/`),
        // toAssistant: (botID) => router.push(`/${useProjectID}/assistants/${botID}`),
        // toAssistantsList: () => router.push(`/${useProjectID}/assistants`),
        // toChat: (botID) => router.push(`/${useProjectID}/chat?botID=${botID}`),
        // toAnalytics: () => router.push(`/${useProjectID}/analytics`),
    }
}
