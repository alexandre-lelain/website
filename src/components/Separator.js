import styled from "styled-components"

const Separator = styled.hr`
  width: 30%;
  margin: 0 auto;
  ${({
    theme: {
      breakpoints,
      palette: { primary },
    },
  }) => `
    color: ${primary.light};
    ${breakpoints.down("sm")} {
      width: 60%;
    }
  `}
`
export default Separator
