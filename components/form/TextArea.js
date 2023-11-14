/* eslint-disable no-unused-vars */

import React, { useEffect, useRef } from "react"
import SmolLabel from "../shared/SmolLabel"

const TextArea = ({
  labelName,
  name = "",
  placeholder = "",
  value = "",
  initial = "",
  onInput,
  onBlur,
  onKeyDown,

  validator = () => true,
  validateType = "", // validateType used in conjunction wiht parent Form component. check Form.js for more details
  validateText = "Please enter a valid response",
  isRequired = false,
  handleSetValidation,
  isValidatable = false,
  isValid = false,

  className = "bg-black1 border-purple1 rounded-[12px] w-full p-2 placeholder:text-[.88em] placeholder:opacity-[.64] placeholder:pl-2 placeholder:pt-1 placeholder:text-[#606164] text-left outline-none resize-none",
  maxLength = "480",
  rows = "1",
}) => {
  let ref = useRef(null)

  const autoResize = () => {
    if (ref.current) {
      ref.current.style.height = "auto"
      ref.current.style.height = ref.current.scrollHeight + "px"
    }
  }

  useEffect(() => {
    if (!initial) return
    onInput(name, initial)
  }, [initial])

  useEffect(() => {
    autoResize()
  }, [value])

  useEffect(() => {
    if (!validator || !handleSetValidation) return

    let isValid = validator(value)
    handleSetValidation(name, isValid)
  }, [isValidatable, value])

  return (
    <div className="flex flex-col w-full">
      {labelName ? (
        <SmolLabel styles={"mb-1"}>
          {labelName}
          {isRequired && <span>*</span>}
        </SmolLabel>
      ) : null}
      <textarea
        ref={ref}
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        onInput={(e) => onInput(name, e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={(e) => {
          if (!onBlur) return

          let saved = {}
          saved[name] = e.target.value
          onBlur(saved)
        }}
        maxLength={maxLength}
        rows={rows}
      />
      {isValidatable && !isValid && (
        <div className="text-xs text-warn">{validateText}</div>
      )}
    </div>
  )
}

export default TextArea
