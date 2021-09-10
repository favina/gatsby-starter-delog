import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ProfileDataSection from "../templates/profileDataSection";

const Committee = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            committee {
              committee {
                title
                subtext
                profileData {
                  image
                  title
                  text
                }
                text
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.committee;
  const committee = siteContent.committee;
  return <ProfileDataSection data={committee} />;
};

export default Committee;
