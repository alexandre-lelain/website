import React from "react"
import styled from "styled-components"
import { Footer } from "components-extra"
import { Typography } from "@material-ui/core"

import { useTranslations } from "hooks"
import Github from "icons/Github"
import LinkedIn from "icons/LinkedIn"
import Mail from "icons/Mail"
import Twitter from "icons/Twitter"

const BottomBannerText = styled(Typography).attrs(() => ({
  variant: "body2",
}))`
  ${({ theme }) => `
    color: ${theme.palette.secondary.dark};
  `};
`

const BottomBanner = () => {
  const { t } = useTranslations()
  return <BottomBannerText>{t("footer.bottom")}</BottomBannerText>
}

const Item = styled(Typography)`
  margin-left: 8px;
`

const StyledFooter = styled(Footer)`
  word-break: break-word;
`

export default () => {
  const { t } = useTranslations()

  return (
    <StyledFooter
      id="contact"
      title={t("footer.title")}
      bottomBanner={BottomBanner}
    >
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
    </StyledFooter>
  )
}
