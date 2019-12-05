import React, { memo } from "react"
import SvgIcon from "@material-ui/core/SvgIcon"

export default memo(({ children, ...rest }) => (
  <SvgIcon htmlColor="#428aff" {...rest}>
    {children}
  </SvgIcon>
))
