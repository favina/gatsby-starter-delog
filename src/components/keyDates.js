import React from "react";
import TextSection from "../templates/textSection";

import { useStaticQuery, graphql } from "gatsby";

const KeyDates = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            keyDates {
              keyDates {
                title
                text
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.keyDates;
  const keyDates = siteContent.keyDates;
  return <TextSection data={keyDates} />;
};

export default KeyDates;
