import Image from "next/image"
import Select from "react-select"

import { components } from "react-select"
import { CharacterOptions } from "../../../usecases/assistant/useBotOnboard"
import SmolLabel from "../../shared/SmolLabel"

export default function SelectCharacter({
  // initial,
  value,
  onChange,
  instanceId,
  placeholder,
  autoFocus,
}) {
  let customComponents = {
    IndicatorSeparator: null,
    Option,
  }

  return (
    <>
      <SmolLabel>Start with a Base Character (Optional)</SmolLabel>
      <Select
        options={CharacterOptions}
        defaultValue={value}
        value={value}
        onChange={(opt) => onChange(opt)}
        isSearchable={true}
        components={customComponents}
        styles={customStyles}
        placeholder={placeholder || "select"}
        instanceId={instanceId || "default"}
        autoFocus={autoFocus}
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
    </>
  )
}

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className="flex items-center cursor-pointer">
        <Image src={props.data.image} height={48} width={48} />
        <span style={{ marginLeft: "10px", fontSize: "1.2em" }}>
          {props.data.label}
        </span>
      </div>
    </components.Option>
  )
}

export const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: "1px solid #24262E",
    backgroundColor: "#383B47",
    padding: 8,
  }),
  placeholder: (provided) => ({
    ...provided,
    overflow: "hidden",
    color: "#606164",
    opacity: 0.64,
    fontSize: ".8em",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),
  menu: (provided) => ({
    ...provided,
    color: "white",
    backgroundColor: "#23242C",
  }),
  container: (provided) => ({
    ...provided,
    borderRadius: "12px",
  }),
  input: (provided) => ({
    ...provided,
    color: "#BFBEBD",
    margin: "1px",
    fontSize: "1em",
    fontWeight: 100,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "1px solid #23242C",
    borderRadius: "12px",

    // none of react-select's styles are passed to <Control />
    // width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"
    const color = "white"

    return { ...provided, opacity, transition, color }
  },
}

export const controlWithIcon = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      <div className="flex flex-row justify-between pr-4 w-full hover:none">
        {children}
        <Image src="/images/arrow-down.svg" height={9} width={9} />
      </div>
    </components.Control>
  )
}
