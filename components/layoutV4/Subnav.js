import React from "react"

export function SubnavSections({ sections, selected, setSection }) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-16">
      {sections.map((v, i) => (
        <div key={`section${i}`} className="flex md:space-x-4">
          <DashViewItem
            key={v}
            name={v}
            isActive={selected == v}
            onItemClick={() => setSection(v)}
          />
        </div>
      ))}
    </div>
  )
}

function DashViewItem({ name, isActive, onItemClick }) {
  let style = ""
  if (isActive) {
    style = "text-white  cursor-default"
  } else {
    style = "text-demph2 hover:text-white"
  }
  return (
    <div onClick={onItemClick} className={`cursor-pointer ${style}`}>
      {name}
    </div>
  )
}
