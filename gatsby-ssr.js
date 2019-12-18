export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setBodyAttributes({
    style: { margin: "0", height: "100%" },
  })
  setHtmlAttributes({
    style: { margin: "0", height: "100%", scrollBehavior: "smooth" },
  })
}
