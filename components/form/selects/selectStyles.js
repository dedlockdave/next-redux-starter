import Image from "next/image"

import { components } from "react-select"

export const customStylesGray = {
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
    color: "white",
    backgroundColor: "#23242C",
    borderRadius: "12px",
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    margin: "1px",
    fontSize: "1em",
    fontWeight: 100,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#5D5F79",
    color: "#23242C",
    margin: "1px",
    fontSize: "1em",
    fontWeight: 100,
  }),
  multiValueGeneric: (provided) => ({
    ...provided,
    backgroundColor: "#5D5F79",
    color: "#23242C",
    margin: "1px",
    fontSize: "1em",
    fontWeight: 100,
  }),

  control: (provided) => ({
    ...provided,
    color: "#23242C",
    backgroundColor: "#16171D",
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
