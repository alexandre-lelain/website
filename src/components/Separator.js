import styled from "styled-components"

const Separator = styled.hr`
  width: 400px;
  margin: 0 auto;
  ${({
    theme: {
      breakpoints,
      palette: { primary },
    },
  }) => `
    border: none;
    border-bottom: solid 1px ${primary.light};
    ${breakpoints.down("sm")} {
      width: 200px;
    }
  `}
`
export default Separator
