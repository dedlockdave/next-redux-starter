export function ButtonGroup({ activeOpt, options, onClick }) {
  const commonClasses = "px-4 py-2 text-sm font-medium focus:z-10"
  const baseClasses = "hover:bg-gray-100 hover:text-blue-700"
  const darkClasses =
    "dark:bg-gray-700 dark:border-div2 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
  const activeClasses = "text-white bg-purple1"
  const darkActiveClasses = "dark:bg-purple1"

  const getClassNames = (opt, position) => {
    const isActive = activeOpt === opt
    const activeStyle = isActive ? `${activeClasses} ${darkActiveClasses}` : ""
    let borderClasses = "border border-div1"
    if (position === "left") borderClasses += " rounded-l-md"
    else if (position === "right") borderClasses += " rounded-r-md"
    else borderClasses += " border-t border-b"
    return `${commonClasses} ${
      isActive ? activeStyle : `${baseClasses} ${darkClasses}`
    } ${borderClasses}`
  }

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      {options.map((opt, i) => {
        const position =
          i === 0 ? "left" : i + 1 === options.length ? "right" : "middle"
        return (
          <button
            key={`button-${i}`}
            onClick={() => onClick(opt)}
            type="button"
            className={getClassNames(opt, position)}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}
