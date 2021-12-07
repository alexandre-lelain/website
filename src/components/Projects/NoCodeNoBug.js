import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="nocode-nobug" prefix="noCodeNoBug">
      <StaticImage
        src="../../images/nocode_nobug.webp"
        alt="nocode-nobug"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
