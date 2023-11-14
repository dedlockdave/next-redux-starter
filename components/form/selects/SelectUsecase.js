import Creatable from "react-select/creatable"
import { useRef } from "react"
import { useEffect, useState } from "react" // Import useState hook
import { components } from "react-select"

import SmolLabel from "../../shared/SmolLabel"
import { customStylesGray } from "./selectStyles"
import { ObjectiveOptions } from "../../../utils/consts"

export default function SelectUsecase({
  labelName,
  name,
  initial,
  isRequired,
  value,
  onInput,
  instanceId,
  placeholder,
  isMulti = false,
  hideMenu = true,
  containerClass = "w-full",
  autoFocus,
  menuOpen = false,
}) {
  useEffect(() => {
    if (!initial) return
    onInput(name, initial)
  }, [initial])

  let customComponents = {
    DropdownIndicator: null, // update to remove dropdown on the right side
    IndicatorSeparator: null,
  }

  if (hideMenu) {
    // eslint-disable-next-line react/display-name
    customComponents.Menu = () => null
  }

  const handleInputChange = (inputVal, { action }) => {
    switch (action) {
      case "input-change":
        onInput(name, {
          label: inputVal,
          value: inputVal,
          objective: inputVal,
          usecase: "generic",
        })
        break
      default:
        break
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
        options={ObjectiveOptions}
        defaultValue={value}
        value={value}
        onInputChange={handleInputChange}
        onChange={(opt) => onInput(name, usecaseFromOption(opt))}
        isSearchable={true}
        components={customComponents}
        styles={customStylesGray}
        placeholder={placeholder || "select"}
        instanceId={instanceId || "default"}
        autoFocus={autoFocus}
        menuIsOpen={menuOpen}
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

function usecaseFromOption(option) {
  let objective = option.label
  let usecase = option.value

  let providedValue = ObjectiveOptions.filter(
    (opt) => opt.value == option.value
  )
  if (providedValue.length) {
    usecase = providedValue[0].value
  } else {
    usecase = "generic"
  }

  return { objective, usecase, ...option }
}
