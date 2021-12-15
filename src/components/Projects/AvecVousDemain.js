import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject id="avec-vous-demain" prefix="avecVousDemain">
      <StaticImage
        src="../../images/avec_vous_demain.webp"
        alt="Avec Vous Demain"
        placeholder="blurred"
        layout="fullWidth"
      />
    </BaseProject>
  )
}
