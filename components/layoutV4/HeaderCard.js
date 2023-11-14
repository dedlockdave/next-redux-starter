export function Fade1({ children, styles = "" }) {
  return (
    <div
      className={`z-20 relative  bg-gradient-to-l from-black1 to-black1 rounded-full ${styles}`}
    >
      {children}
    </div>
  )
}
