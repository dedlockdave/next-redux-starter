export default function Well({ children, styles = "" }) {
  return (
    <div
      className={`w-full rounded-[12px] bg-black1 py-2 px-4 md:py-4  md:px-8 overflow-y-scroll ${styles}`}
    >
      <div className="flex flex-wrap w-full">{children}</div>
    </div>
  )
}

export function Card({ children, className = "w-full", onClick = () => {} }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap w-full backdrop-filter backdrop-blur-lg bg-opacity-80 bg-deeppurp rounded-lg p-6">
        {children}
      </div>
    </div>
  )
}

export function ToggleSplit({ children }) {
  return (
    <div className="grid grid-cols-[72%_28%] flex flex-row w-full xl:w-3/4 space-x-4 justify-between items-center">
      {children}
    </div>
  )
}
