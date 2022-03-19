import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

function CustomCheckbox({
  defaultChecked,
  color,
  inputProps,
  style,
  className,
}) {
  return (
    <div>
      <Checkbox
        defaultChecked={defaultChecked}
        color={color}
        inputProps={inputProps}
        className={className}
        style={style}
      />
    </div>
  );
}
export default CustomCheckbox;
