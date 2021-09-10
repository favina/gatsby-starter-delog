import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import TextSection from "../templates/textSection";

const Submissions = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            submissions {
              submissions {
                title
                text
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.submissions;
  const submissions = siteContent.submissions;
  return <TextSection data={submissions} />;
};

export default Submissions;
