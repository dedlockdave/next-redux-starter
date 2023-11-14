import { useDispatch, useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"

import { sideBarAnimation } from "../../../styles/animations"
import { outsideTrigger } from "../../../usecases/screen"
import { setIsMobileNavOpen } from "../../../state/viewSlice"

export default function NavMobile({ children }) {
    let dispatch = useDispatch()
    let { isMobileNavOpen } = useSelector((s) => s.view)
    let ref = outsideTrigger(() => {
        isMobileNavOpen && dispatch(setIsMobileNavOpen(false))
    })

    const toggleMenu = () => {
        dispatch(setIsMobileNavOpen(!isMobileNavOpen))
    }

    return (
        <div className="" ref={ref}>
            <AnimatePresence>
                {isMobileNavOpen && (
                    <motion.div
                        className={
                            "bg-gradient-to-t from-black1 to-black1 absolute bottom-0 left-0 h-[100vh] z-40"
                        }
                        // onClick={() => setSideShowing(false)}
                        {...sideBarAnimation}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                className="absolute left-6 top-3 w-8 h-10 text-neutral sticky z-50"
                onClick={toggleMenu}
            >
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {isMobileNavOpen ? (
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-5 bg-current transform transition duration-400 ease-in-out rotate-45"
                        />
                    ) : (
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-5 bg-current transform transition duration-400 ease-in-out -translate-y-1.5"
                        />
                    )}
                    {isMobileNavOpen ? (
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-5 bg-current transform transition duration-400 ease-in-out opacity-0"
                        />
                    ) : (
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-5 bg-current transform transition duration-400 ease-in-out"
                        />
                    )}
                    {isMobileNavOpen ? (
                        <span
                            aria-hidden="true"
                            className="block h-0.5 w-5 bg-current transform transition duration-400 ease-in-out -rotate-45"
                        />
                    ) : (
                        <span
                            aria-hidden="true"
                            className="absolute block h-0.5 w-5 bg-current transform transition duration-400 ease-in-out translate-y-1.5"
                        />
                    )}
                </div>
            </button>
        </div>
    )
}
