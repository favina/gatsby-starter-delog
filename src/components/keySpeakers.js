import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProfileDataSection from "../templates/profileDataSection";

const KeySpeakers = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            speakers {
              speakers {
                title
                subtext
                text
                profileData {
                  image
                  title
                  text
                }
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.speakers;
  const keySpeakers = siteContent.speakers;
  return <ProfileDataSection data={keySpeakers} />;
};

export default KeySpeakers;
