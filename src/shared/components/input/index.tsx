import { InputField } from "./style"

interface InputProps {
  id: string
  name: string
  value: string
  placeholder: string
  onChange: (event: React.ChangeEvent) => void
}

const Input = ({
  id,
  name,
  value,
  placeholder,
  onChange
}: InputProps) => {
  return(
    <InputField
      data-testid={`${name}-input`}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete='off'
    />
  )
}

export default Input