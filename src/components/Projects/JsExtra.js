import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="js-extra" prefix="jsExtra">
      <StaticImage
        src="../../images/js_extra.webp"
        alt="js-extra"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
