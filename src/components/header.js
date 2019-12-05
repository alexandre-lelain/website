import React from "react"
import { Navbar } from "components-extra"

import Book from "icons/Book"

const Header = () => (
  <Navbar>
    <Navbar.Brand title="My Portfolio">
      <Book />
    </Navbar.Brand>
  </Navbar>
)

export default Header
