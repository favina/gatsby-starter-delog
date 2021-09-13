import React from "react";
import TextSection from "../templates/textSection";
import { useStaticQuery, graphql } from "gatsby";

const ConferenceTopics = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            conferenceTopics {
              conferenceTopics {
                title
                text
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.conferenceTopics;
  const conferenceTopics = siteContent.conferenceTopics;
  return <TextSection data={conferenceTopics} />;
};

export default ConferenceTopics;
