import Tags from "./Tags"
import Nav from "./nav/TopNav"
import { useScreenSize } from "../../utils/effects"

export default function LayoutV4({ children }) {
    let screen = useScreenSize()
    let styles = {
        display: "grid",
        height: "100vh", // This will make the container span the entire height of the viewport
        gridTemplateRows: "6vh auto",
        alignItems: "center",
    }

    if (screen == "small" || screen == "super-small") {
        styles = {
            ...styles,
            gridTemplateRows: "8vh auto",
            gridTemplateColumns: "100vw",
            gridTemplateAreas: `
        "nav"
        "main"
      `,
        }
    } else {
        styles = {
            ...styles,
            gridTemplateRows: "6vh auto",
            gridTemplateColumns: "100vw",
            gridTemplateAreas: `
        "nav"
        "main"
      `,
        }
    }

    return (
        <div className="" style={styles}>
            <div
                style={{
                    gridArea: "nav",
                    backgroundColor: "#1D1E26",
                    // backgroundColor: "#16171D", // deep ass purple
                    // backgroundColor: "#16171D", // gray
                    height: "100%",
                }}
            >
                <Nav />
            </div>
            <div
                className="relative overflow-y-auto h-[92vh]"
                style={{ gridArea: "main" }}
            >
                {children}
            </div>
            {/* <Footer /> */}
            <div
                className="h-full w-full"
                style={{ gridArea: "tags", backgroundColor: "#1D1E26" }}
            />
            <Tags style={{ gridArea: "tags" }} />
        </div>
    )
}
