import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Accordion = ({ i, expanded, setExpanded, header, children }) => {
  const isOpen = i === expanded
  let animate = {}
  if (isOpen) {
    animate = { backgroundColor: "#5D5F79", color: "#ffffff", opacity: 1 }
  } else {
    animate = { backgroundColor: "#1F2021", color: "#BFBEBD", opacity: 0.8 }
  }
  return (
    <>
      <motion.p
        initial={false}
        animate={animate}
        className="px-2 text-lg rounded-md"
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {header}
      </motion.p>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}

export function AccordionGroup({ children, ns = "randomassname" }) {
  const [expanded, setExpanded] = useState(0)
  return children.map((child, i) => (
    <Accordion
      key={`accordion${ns}${i}`}
      i={i}
      expanded={expanded}
      setExpanded={setExpanded}
      {...child.props}
    >
      {child}
    </Accordion>
  ))
}
