import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="wip" prefix="wip">
      <StaticImage
        src="../../images/wip.webp"
        alt="WIP"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
