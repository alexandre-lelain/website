export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setBodyAttributes({
    style: { margin: "0" },
  })
  setHtmlAttributes({
    style: {
      margin: "0",
      scrollBehavior: "smooth",
      scrollPaddingTop: "64px",
      backgroundColor: "#e6e6e6",
    },
  })
}
