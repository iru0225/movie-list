interface ToggleProps {
  label: string
  isChecked: boolean
  onChange: (value: boolean) => void
}

const Toggle = ({
  label,
  isChecked,
  onChange
}: ToggleProps) => {
  const handleChange = (e: React.ChangeEvent) => {
    const { checked } = e.target as HTMLInputElement
    onChange(checked)
  }
  return(
      <label className="toggle">
        <input onChange={handleChange} className="toggle-checkbox" type="checkbox" checked={isChecked}/>
        <div className="toggle-switch"></div>
        <span className="toggle-label">{label}</span>
      </label>
  )
}

export default Toggle