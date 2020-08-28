import { merge } from "lodash"

const baseTheme = {
  palette: {
    primary: {
      main: "#264d73",
    },
    secondary: {
      main: "#f2f2f2",
    },
  },
}

export const lightTheme = merge({}, baseTheme, {
  palette: {
    type: "light",
    backgrounds: {
      page: "aliceblue",
    },
  },
})

export const darkTheme = merge({}, baseTheme, {
  palette: {
    type: "dark",
    backgrounds: {
      page: "#333333",
    },
  },
})
