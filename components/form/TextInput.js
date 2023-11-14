/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import SmolLabel from "../shared/SmolLabel"

export default function TextInput(props) {
  let {
    labelName,
    name,
    initial = "",
    value = "",
    onInput = () => {},

    validator = () => true, // only need validator or validateType
    validateText = "Please enter a valid response",
    isRequired = false,
    handleSetValidation,
    isValidatable = false,
    isValid = false,

    className = "bg-black1 border-purple1 rounded-[12px] w-full py-1.5 px-2 placeholder:text-[.8em] placeholder:opacity-[.64] placeholder:pl-2 placeholder:text-[#606164] text-left outline-none",
    formCreated,
    // pattern = "[A-Za-z0-9]+",
  } = props

  useEffect(() => {
    if (!validator || !handleSetValidation) return

    let isValid = validator(value)
    handleSetValidation(name, isValid)
  }, [isValidatable, value])

  useEffect(() => {
    if (!initial) return
    onInput(name, initial)
  }, [initial, formCreated])

  return (
    <div className="flex flex-col w-full">
      {labelName ? (
        <SmolLabel styles={"mb-1 text-white"}>
          {labelName}
          {isRequired && <span>*</span>}
        </SmolLabel>
      ) : null}
      <input
        {...props}
        value={value || ""}
        className={className}
        onInput={(e) => onInput(name, e.target.value)}
        onBlur={(e) => {
          if (!props.onBlur) return

          let saved = {}
          saved[name] = e.target.value
          props.onBlur(saved)
        }}
        // pattern={pattern}
      />
      {isValidatable && !isValid && (
        <div className="text-xs text-warn">{validateText}</div>
      )}
    </div>
  )
}
