import Nav from "./nav/TopNav"
import { useScreenSize } from "../../usecases/screen"
import { Footer } from "./Footer"

export default function LayoutV4({ children }) {
    let screen = useScreenSize()
    let styles = {
        display: "grid",
        height: "100vh",
        gridTemplateRows: "6vh auto 10vh",
        alignItems: "center",
    }

    if (screen == "small" || screen == "super-small") {
        styles = {
            ...styles,
            gridTemplateRows: "8vh auto 10vh",
            gridTemplateColumns: "100vw",
            gridTemplateAreas: `
        "nav"
        "main"
        "footer"  
      `,
        }
    } else {
        styles = {
            ...styles,
            gridTemplateRows: "8h auto 10vh",
            gridTemplateColumns: "100vw",
            gridTemplateAreas: `
        "nav"
        "main"
    "footer"
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
            <div
                className="footer" // Updated className
                style={{ gridArea: "footer", backgroundColor: "#1D1E26" }} // Updated gridArea to "footer"
            >
                <Footer />
            </div>
            <div
                className="h-full w-full"
                style={{ gridArea: "tags", backgroundColor: "#1D1E26" }}
            />
        </div>
    )
}
