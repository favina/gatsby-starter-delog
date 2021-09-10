import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TableAndTextSection from "../templates/tableAndTextSection";

const About = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            about {
              about {
                title
                subtext
                table {
                  heading {
                    title
                  }
                  column {
                    columnData {
                      row {
                        data
                      }
                    }
                  }
                  text
                }
              }
            }
          }
        }
      }
    `
  );
  const siteContent = data.site.siteMetadata.about;
  const about = siteContent.about;
  return <TableAndTextSection data={about} />;
};

export default About;
