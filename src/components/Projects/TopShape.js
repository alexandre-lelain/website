import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="top-shape" prefix="topShape">
      <StaticImage
        src="../../images/top_shape.webp"
        alt="top-shape"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
