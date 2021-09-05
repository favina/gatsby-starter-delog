import React, { Fragment } from "react";
import Helmet from "react-helmet";
import HomepageBanner from "../components/homepageBanner";
import SiteFooterMap from "../components/siteFooterMap";
import SiteFooterContact from "../components/siteFooterContact";
import "bootstrap/dist/css/bootstrap.min.css";
import { graphql } from "gatsby";
import HomepageContent from "../components/homepageContent";
import Layout from "../components/layout";

const IndexPage = ({ data: { site } }) => {
  const { siteMetadata } = site;
  console.log("siteMetadata", siteMetadata);
  return (
    <Fragment>
      <HomepageBanner
        homeContent={siteMetadata.homePageBanner.home}
        siteUrls={siteMetadata.homePageBanner.siteUrls}
      />
      <HomepageContent />
      <SiteFooterContact />
      <SiteFooterMap />
    </Fragment>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        homePageBanner {
          title
          siteUrls {
            urlName
          }
          home {
            title
            description
            image
            buttonText
            buttonLink
          }
        }
      }
    }
  }
`;
