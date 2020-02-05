import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, keywords = [], lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            keywords
            image
          }
        }
      }
    `
  )

  const metaData = site.siteMetadata

  const metaDescription = description || metaData.description
  const metaKeywords = [...metaData.keywords, ...keywords]
  const metaTitle = title ? `${title} | ${metaData.title}` : metaData.title

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${metaData.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaData.url,
        },
        {
          property: `og:image`,
          content: metaData.image,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaData.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:url`,
          content: metaData.url,
        },
        {
          name: `twitter:site`,
          content: metaData.author,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:label1`,
          content: "Made by",
        },
        {
          name: `twitter:label2`,
          content: "Filed under",
        },
        {
          name: `twitter:data1`,
          content: "Alexandre Le Lain",
        },
        {
          name: `twitter:data2`,
          content: "Porfolio, projects",
        },
        {
          name: `google-site-verification`,
          content: "4qrOnPgd8VK4q-ZYzMsB7k0nTk3l5Aka4jfegzxfDic",
        },
      ]
        .concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        media="print"
        onLoad="this.media='all'"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.array,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
