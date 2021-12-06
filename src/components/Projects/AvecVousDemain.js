import React from "react"
import Media from "images/avec_vous_demain.webp"

import BaseProject from "./BaseProject"

export default () => {
  return (
    <BaseProject
      id="avec-vous-demain"
      image={{ src: Media }}
      prefix="avecVousDemain"
    />
  )
}
