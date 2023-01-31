import React from "react";

const OGP = ({ title, description, image }) => (
  <>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </>
);

export default OGP;
