import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="components-extra" prefix="componentsExtra">
      <StaticImage
        src="../../images/components_extra.webp"
        alt="components-extra"
        placeholder="blurred"
        height={282}
      />
    </BaseProject>
  )
}
