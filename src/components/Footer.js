import React from "react"
import styled from "styled-components"
import { Footer } from "components-extra"
import { Typography } from "@material-ui/core"

import { useTranslations } from "hooks"
import Github from "icons/Github"
import LinkedIn from "icons/LinkedIn"
import Mail from "icons/Mail"
import Twitter from "icons/Twitter"

const BottomBanner = () => {
  const { t } = useTranslations()
  return <Typography variant="body2">{t("footer.bottom")}</Typography>
}

const Item = styled(Typography)`
  margin-left: 8px;
`

export default () => {
  const { t } = useTranslations()

  return (
    <Footer title={t("footer.title")} bottomBanner={BottomBanner}>
      <Footer.Column isInline>
        <Footer.Item href="mailto:lelain.alexandre@gmail.com">
          <Mail />
          <Item>{t("footer.mail")}</Item>
        </Footer.Item>
        <Footer.Item href="https://github.com/alexandre-lelain">
          <Github />
          <Item>{t("footer.github")}</Item>
        </Footer.Item>
        <Footer.Item href="https://twitter.com/a_lelain">
          <Twitter />
          <Item>{t("footer.twitter")}</Item>
        </Footer.Item>
        <Footer.Item href="https://www.linkedin.com/in/alexandre-lelain">
          <LinkedIn />
          <Item>{t("footer.linkedin")}</Item>
        </Footer.Item>
      </Footer.Column>
    </Footer>
  )
}