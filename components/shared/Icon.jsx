import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icon({
  label,
  icon,
  onClick,
  className = "",
  size = "1x",
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer flex flex-col ${className}`}
    >
      <FontAwesomeIcon icon={icon} size={size} />
      <p className="text-xs">{label}</p>
    </div>
  )
}
