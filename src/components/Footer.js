import React from "react"
import styled from "styled-components"
import { Footer } from "components-extra"
import { Typography } from "@material-ui/core"
import { useTranslation } from "react-i18next"

import { Github, LinkedIn, Mail, Twitter } from "icons"

const BottomBannerText = styled(Typography).attrs(() => ({
  variant: "body2",
}))`
  ${({ theme }) => `
    color: ${theme.palette.secondary.dark};
  `};
`

const BottomBanner = () => {
  const { t } = useTranslation("footer")
  return <BottomBannerText>{t("bottom")}</BottomBannerText>
}

const Item = styled(Typography)`
  margin-left: 8px;
`

const StyledFooter = styled(Footer)`
  word-break: break-word;
`

export default () => {
  const { t } = useTranslation("footer")

  return (
    <StyledFooter
      id="contact"
      title={t("title")}
      bottomBanner={<BottomBanner />}
    >
      <Footer.Column isInline>
        <Footer.Item href="mailto:lelain.alexandre@gmail.com">
          <Mail />
          <Item>{t("mail")}</Item>
        </Footer.Item>
        <Footer.Item href="https://github.com/alexandre-lelain">
          <Github />
          <Item>{t("github")}</Item>
        </Footer.Item>
        <Footer.Item href="https://twitter.com/a_lelain">
          <Twitter />
          <Item>{t("twitter")}</Item>
        </Footer.Item>
        <Footer.Item href="https://www.linkedin.com/in/alexandre-lelain">
          <LinkedIn />
          <Item>{t("linkedin")}</Item>
        </Footer.Item>
      </Footer.Column>
    </StyledFooter>
  )
}
