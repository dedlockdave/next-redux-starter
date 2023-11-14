/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import SmolLabel from "../shared/SmolLabel"
import ToggleButton from "../profileV2/ToggleButton"

export default function ToggleInput({
  name,
  value = false,
  onInput = () => {},

  // pattern = "[A-Za-z0-9]+",
}) {
  return <ToggleButton onToggle={(val) => onInput(name, val)} status={value} />
}
