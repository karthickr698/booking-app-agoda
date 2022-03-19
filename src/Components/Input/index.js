import TextField from "@material-ui/core/TextField";

function Input({
  placeholder,
  value,
  label,
  onChange,
  className,
  disabled,
  InputProps,
  type,
  style,
  icon,
}) {
  return (
    <div>
      <TextField
        style={style}
        placeholder={placeholder}
        icon={icon}
        label={label}
        // variant="filled"
        variant="outlined"
        type={type}
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
        InputProps={InputProps}
      />
    </div>
  );
}
export default Input;
