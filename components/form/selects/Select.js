import Select from "react-select"

import SmolLabel from "../../shared/SmolLabel"
import { controlWithIcon, customStylesGray } from "./selectStyles"
export default function SelectOptions({
  labelName,
  name,
  isRequired,
  value,
  options,
  onInput,
  instanceId,
  placeholder,
  isMulti = false,
  containerClass = "w-full",
}) {
  return (
    <div className={containerClass}>
      {labelName ? (
        <SmolLabel styles={"mb-1"}>
          {labelName}
          {isRequired && <span>*</span>}
        </SmolLabel>
      ) : null}
      <Select
        isMulti={isMulti}
        defaultValue={value}
        value={value}
        onChange={(v) => onInput(name, v)}
        options={options}
        isSearchable={true}
        components={{
          Control: controlWithIcon,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={customStylesGray}
        placeholder={placeholder || "select"}
        instanceId={instanceId || "default"}
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
