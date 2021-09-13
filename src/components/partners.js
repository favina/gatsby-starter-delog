import React from "react";
import TextSection from "../templates/textSection";
import { useStaticQuery, graphql } from "gatsby";

const Partners = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            partners {
              partners {
                title
                text
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.partners;
  const partners = siteContent.partners;
  return <TextSection data={partners} />;
};

export default Partners;
