import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="agent-web" prefix="agentWeb">
      <StaticImage
        src="../../images/agent_web.webp"
        alt="Agent Web"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
