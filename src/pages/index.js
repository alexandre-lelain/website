import React from "react"

import About from "components/About"
import Experiences from "components/Experiences"
import Landing from "components/Landing"
import Projects from "components/Projects"
import SEO from "components/Seo"
import Skills from "components/Skills"
import Footer from "components/Footer"

const IndexPage = () => (
  <>
    <SEO />
    <main>
      <Landing />
      <About />
      <Experiences />
      <Projects />
      {/*<Skills />*/}
    </main>
    <Footer />
  </>
)

export default IndexPage
