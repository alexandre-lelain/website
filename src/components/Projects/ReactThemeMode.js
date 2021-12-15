import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="react-theme-mode" prefix="reactThemeMode">
      <StaticImage
        src="../../images/react_theme_mode.webp"
        alt="react-theme-mode"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
