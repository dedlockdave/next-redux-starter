import Tags from "./Tags"
import { useScreenSize } from "../../usecases/screen"

export default function Index({ children }) {
    let screen = useScreenSize()

    let styles
    if (screen == "small" || screen == "super-small") {
        styles = {
            display: "grid",
            gridTemplateRows: "100vh",
            gridTemplateColumns: "100vw",
            alignItems: "center",
        }
    } else {
        styles = {
            display: "grid",
            gridTemplateRows: "100vh",
            gridTemplateColumns: "100vw",
            alignItems: "center",
        }
    }

    return (
        <div>
            {children}
            {/* <div className='mt-8'>
                <Footer/>
            </div> */}
            <Tags />
        </div>
    )
}
