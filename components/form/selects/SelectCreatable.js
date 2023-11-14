import Creatable from "react-select/creatable"
import { useRef } from "react"
import { useEffect, useState } from "react" // Import useState hook
import { components } from "react-select"

import SmolLabel from "../../shared/SmolLabel"
import { customStylesGray } from "./selectStyles"

export default function SelectOptionsCreatable({
  labelName,
  name,
  initial,
  isRequired,
  value,
  options,
  onInput,
  instanceId,
  placeholder,
  isMulti = false,
  hideMenu = true,
  onBlur,
  containerClass = "w-full",
  autoFocus,
  defaultOpen = false,
}) {
  const [inputValue, setInputValue] = useState("")
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const selectRef = useRef() // Create a reference

  useEffect(() => {
    if (!initial) return
    onInput(name, initial)
  }, [initial])

  const handleInputChange = (inputVal, { action }) => {
    switch (action) {
      case "input-change":
        setInputValue(inputVal)
        break
      case "input-blur":
        handleBlur(inputVal)
        break
      case "menu-close":
        setInputValue("")
        break
      default:
        break
    }
  }

  const handleBlur = (arg) => {
    if (!onBlur) return
    onBlur(value)

    // const newValue = { label: inputValue, value: inputValue }
    // if (isMulti) {
    //   onBlur(value ? [...value, newValue] : [newValue])
    // } else {
    //   onBlur(newValue)
    // }
  }

  // const handleMenuOpen = () => {
  //   setMenuIsOpen(true)
  // }

  // const handleMenuClose = () => {
  //   setMenuIsOpen(false)
  //   handleBlur()
  // }

  let customComponents = {
    // Control: controlWithIcon,
    DropdownIndicator: null, // update to remove dropdown on the right side
    IndicatorSeparator: null,
    // Input: (props) => <components.Input innerRef={selectRef} {...props} />,
  }

  if (hideMenu) {
    // eslint-disable-next-line react/display-name
    customComponents.Menu = () => null
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      let newOpt = { label: inputValue, value: inputValue }
      try {
        if (isMulti && Array.isArray(value)) {
          onInput(name, [...value, newOpt])
        } else if (!isMulti) {
          onInput(name, newOpt)
        } else {
          onInput(name, [newOpt])
        }

        event.target.blur()
        event.target.focus()
        // selectRef.current.select.focus()
      } catch (error) {
        console.error("FIUCL!", error)
      }
      setInputValue("")
    }
  }

  return (
    <div className={containerClass}>
      {labelName ? (
        <SmolLabel styles={"mb-1"}>
          {labelName}
          {isRequired && <span>*</span>}
        </SmolLabel>
      ) : null}
      <Creatable
        isMulti={isMulti}
        options={options}
        defaultValue={value}
        value={value}
        onChange={(v) => onInput(name, v)}
        // onMenuOpen={handleMenuOpen}
        // onMenuClose={handleMenuClose}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        isSearchable={true}
        components={customComponents}
        styles={customStylesGray}
        placeholder={placeholder || "select"}
        instanceId={instanceId || "default"}
        autoFocus={autoFocus}
        menuIsOpen={defaultOpen}
        innerRef={selectRef} // Use the reference
        // onCreateOption={(inputValue) => {
        //   let newOpt = { label: inputValue, value: inputValue }
        //   onInput(name, isMulti ? [...value, newOpt] : newOpt)
        //   setInputValue("")
        // }}
        // onCreateOption={(inputValue) => {
        //   handleBlur(inputValue)
        //   setInputValue("")
        // }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            //hover color
            primary25: null,
            //active color
            primary50: "#4344B0",
            //focus color
            primary: "#4344B0",
          },
        })}
      />
    </div>
  )
}
