import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const imageStyle = {
  marginTop: "calc(6vh + 2vw)",
  width: "156px",
  border: "3px white solid",
  borderRadius: "50%",
}

const Profile = () => {
  return (
    <StaticImage
      alt="Alexandre Le Lain"
      src="../images/profile.webp"
      layout="constrained"
      width={356}
      height={356}
      placeholder="blurred"
      style={imageStyle}
    />
  )
}

export default Profile
