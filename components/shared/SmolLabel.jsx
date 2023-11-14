export default function SmolLabel({ children, styles }) {
  return <p className={`mt-1 text-neutral text-xs ${styles}`}>{children}</p>
}
